import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const codeExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".md",
  ".mdx",
]);

const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".JPG",
  ".JPEG",
  ".Jpeg",
  ".PNG",
];

const ignoredDirectories = new Set([
  "node_modules",
  ".next",
  ".git",
]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) {
        return [];
      }

      return walk(fullPath);
    }

    return [fullPath];
  });
}

function hasWebpAlternative(assetPath) {
  const assetAbsolutePath = path.join(publicDir, assetPath);
  const webpAbsolutePath = assetAbsolutePath.replace(
    /\.(jpg|jpeg|png)$/i,
    ".webp"
  );

  return fs.existsSync(webpAbsolutePath);
}

function toWebpPath(assetPath) {
  return assetPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
}

function replaceInFile(filePath) {
  const originalContent = fs.readFileSync(filePath, "utf8");
  let content = originalContent;
  let replacements = 0;

  for (const extension of imageExtensions) {
    const escapedExtension = extension.replace(".", "\\.");

    const pattern = new RegExp(
      `(["'])\\/images\\/([^"']+?)${escapedExtension}\\1`,
      "g"
    );

    content = content.replace(pattern, (match, quote, assetWithoutExt) => {
      const currentAsset = `/images/${assetWithoutExt}${extension}`;

      if (!hasWebpAlternative(currentAsset)) {
        return match;
      }

      replacements += 1;

      return `${quote}${toWebpPath(currentAsset)}${quote}`;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
  }

  return replacements;
}

function main() {
  const files = walk(root).filter((file) =>
    codeExtensions.has(path.extname(file))
  );

  let changedFiles = 0;
  let totalReplacements = 0;

  for (const file of files) {
    const replacements = replaceInFile(file);

    if (replacements > 0) {
      changedFiles += 1;
      totalReplacements += replacements;

      console.log(
        `✅ ${path.relative(root, file).replaceAll("\\", "/")} — ${replacements}`
      );
    }
  }

  console.log("\nReplace to WebP completed.");
  console.log(`Changed files: ${changedFiles}`);
  console.log(`Total replacements: ${totalReplacements}\n`);
}

main();
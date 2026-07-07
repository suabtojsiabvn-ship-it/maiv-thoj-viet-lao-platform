import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "assets", "source");
const outputDir = path.join(root, "public", "images");

const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = 1600;
const quality = 78;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) return walk(fullPath);

    return [fullPath];
  });
}

function toOutputPath(sourcePath) {
  const relativePath = path.relative(sourceDir, sourcePath);
  const parsed = path.parse(relativePath);

  return path.join(outputDir, parsed.dir, `${parsed.name}.webp`);
}

async function buildAsset(sourcePath) {
  const outputPath = toOutputPath(sourcePath);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  await image
    .resize({
      width: Math.min(metadata.width ?? maxWidth, maxWidth),
      withoutEnlargement: true,
    })
    .webp({ quality })
    .toFile(outputPath);

  console.log(
    `✅ ${path.relative(root, outputPath).replaceAll("\\", "/")}`
  );
}

async function main() {
  const files = walk(sourceDir).filter((file) =>
    supportedExtensions.has(path.extname(file).toLowerCase())
  );

  console.log(`Building ${files.length} media assets...\n`);

  for (const file of files) {
    await buildAsset(file);
  }

  console.log("\nMedia build completed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
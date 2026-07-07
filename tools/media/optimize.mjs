import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");

const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
]);

const maxWidth = 1600;
const quality = 78;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(fullPath);
    }

    return [fullPath];
  });
}

function toProjectPath(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!supportedExtensions.has(ext)) return;

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  const image = sharp(filePath);
  const metadata = await image.metadata();

  await image
    .resize({
      width: Math.min(metadata.width ?? maxWidth, maxWidth),
      withoutEnlargement: true,
    })
    .webp({
      quality,
    })
    .toFile(outputPath);

  console.log(`✅ ${toProjectPath(outputPath)}`);
}

async function main() {
  const files = walk(imagesDir).filter((file) =>
    supportedExtensions.has(path.extname(file).toLowerCase())
  );

  console.log(`Optimizing ${files.length} images...\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log("\nImage optimization completed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
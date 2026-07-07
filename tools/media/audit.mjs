import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const imagesDir = path.join(publicDir, "images");

const mediaExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".mp4",
  ".mov",
  ".heic",
  ".arw",
  ".raw",
  ".psd",
]);

const forbiddenExtensions = new Set([
  ".mp4",
  ".mov",
  ".heic",
  ".arw",
  ".raw",
  ".psd",
]);

const maxSize = 1 * 1024 * 1024;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(fullPath);
    }

    return [fullPath];
  });
}

function walkDirs(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return [fullPath, ...walkDirs(fullPath)];
    }

    return [];
  });
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function projectPath(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

function getCodeReferences() {
  const codeFiles = walk(root).filter((file) => {
    if (file.includes("node_modules")) return false;
    if (file.includes(".next")) return false;

    return [".ts", ".tsx"].includes(path.extname(file));
  });

  const references = [];

  for (const file of codeFiles) {
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      const matches = line.matchAll(/["'](\/images\/[^"']+)["']/g);

      for (const match of matches) {
        references.push({
          file: projectPath(file),
          line: index + 1,
          asset: match[1],
          absolutePath: path.join(publicDir, match[1]),
        });
      }
    });
  }

  return references;
}

const mediaFiles = walk(imagesDir).filter((file) =>
  mediaExtensions.has(path.extname(file).toLowerCase())
);

const oversized = [];
const forbidden = [];
const suspiciousFolders = [];
const missingReferences = [];
const duplicateCandidates = new Map();

for (const file of mediaFiles) {
  const stat = fs.statSync(file);
  const ext = path.extname(file).toLowerCase();

  if (stat.size > maxSize) {
    oversized.push({
      file: projectPath(file),
      size: formatSize(stat.size),
    });
  }

  if (forbiddenExtensions.has(ext)) {
    forbidden.push({
      file: projectPath(file),
      size: formatSize(stat.size),
    });
  }

  const dir = path.dirname(file);
  const stem = path.basename(file, path.extname(file)).toLowerCase();
  const key = `${projectPath(dir)}/${stem}`;

  if (!duplicateCandidates.has(key)) {
    duplicateCandidates.set(key, []);
  }

  duplicateCandidates.get(key).push(projectPath(file));
}

for (const dir of walkDirs(imagesDir)) {
  const ext = path.extname(dir).toLowerCase();

  if (mediaExtensions.has(ext)) {
    suspiciousFolders.push(projectPath(dir));
  }
}

for (const ref of getCodeReferences()) {
  if (!fs.existsSync(ref.absolutePath)) {
    missingReferences.push({
      file: ref.file,
      line: ref.line,
      asset: ref.asset,
    });
  }
}

const duplicates = [...duplicateCandidates.values()].filter(
  (items) => items.length > 1
);

console.log("\nMEDIA AUDIT REPORT");
console.log("==================\n");

console.log(`Total media files: ${mediaFiles.length}`);

console.log("\nMissing image references:");
if (missingReferences.length === 0) {
  console.log("✅ None");
} else {
  missingReferences.forEach((item) => {
    console.log(`❌ ${item.asset}`);
    console.log(`   ${item.file}:${item.line}`);
  });
}

console.log("\nOversized files > 1MB:");
if (oversized.length === 0) {
  console.log("✅ None");
} else {
  oversized.forEach((item) => {
    console.log(`⚠️  ${item.file} — ${item.size}`);
  });
}

console.log("\nForbidden raw/video files in public:");
if (forbidden.length === 0) {
  console.log("✅ None");
} else {
  forbidden.forEach((item) => {
    console.log(`❌ ${item.file} — ${item.size}`);
  });
}

console.log("\nSuspicious folders named like media files:");
if (suspiciousFolders.length === 0) {
  console.log("✅ None");
} else {
  suspiciousFolders.forEach((folder) => {
    console.log(`⚠️  ${folder}`);
  });
}

console.log("\nPossible duplicate assets:");
if (duplicates.length === 0) {
  console.log("✅ None");
} else {
  duplicates.forEach((group) => {
    console.log("⚠️");
    group.forEach((file) => console.log(`   ${file}`));
  });
}

console.log("\nAudit completed.\n");
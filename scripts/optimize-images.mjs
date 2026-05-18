import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const publicDir = path.resolve("public");
const HERO_MAX_WIDTH = 480;
const LOGO_MAX_WIDTH = 160;
const SCREENSHOT_MAX_WIDTH = 720;

async function optimizeHero() {
  const input = path.join(publicDir, "Irfanpic.jpg");
  const jpgOut = path.join(publicDir, "Irfanpic.jpg");
  const webpOut = path.join(publicDir, "Irfanpic.webp");

  await sharp(input)
    .rotate()
    .resize({ width: HERO_MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(jpgOut + ".tmp");
  await sharp(input)
    .rotate()
    .resize({ width: HERO_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(webpOut);

  const { rename, unlink } = await import("fs/promises");
  await unlink(jpgOut).catch(() => {});
  await rename(jpgOut + ".tmp", jpgOut);

  const jpg = await stat(jpgOut);
  const webp = await stat(webpOut);
  console.log(`Hero: jpg ${(jpg.size / 1024).toFixed(1)} KB, webp ${(webp.size / 1024).toFixed(1)} KB`);
}

async function optimizeFile(filePath, maxWidth, forceQuality = false) {
  const ext = path.extname(filePath).toLowerCase();
  const meta = await sharp(filePath).metadata();
  const needsResize = meta.width && meta.width > maxWidth;

  if (!needsResize && !forceQuality) {
    return;
  }

  const pipeline = sharp(filePath).rotate();
  if (needsResize) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  if (ext === ".png") {
    await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(filePath + ".tmp");
  } else if (ext === ".jpg" || ext === ".jpeg") {
    await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(filePath + ".tmp");
  } else {
    return;
  }

  const { rename, unlink } = await import("fs/promises");
  await unlink(filePath);
  await rename(filePath + ".tmp", filePath);
  const out = await stat(filePath);
  console.log(`Optimized ${path.relative(publicDir, filePath)}: ${(out.size / 1024).toFixed(1)} KB`);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    if (full.includes(`${path.sep}Logos${path.sep}`)) {
      await optimizeFile(full, LOGO_MAX_WIDTH);
    } else if (full.includes(`${path.sep}Screenshots${path.sep}`)) {
      await optimizeFile(full, SCREENSHOT_MAX_WIDTH, true);
    }
  }
}

await optimizeHero();
await walk(publicDir);
console.log("Image optimization complete.");

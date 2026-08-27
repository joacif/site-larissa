const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "favicon.svg");
const svgBuffer = fs.readFileSync(svgPath);

async function main() {
  // apple-touch-icon: 180x180 PNG
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(root, "public", "apple-touch-icon.png"));
  console.log("✓ apple-touch-icon.png gerado (180x180)");

  // favicon-32.png para o ICO
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  // favicon-16.png para o ICO
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  // favicon-48.png para o ICO
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // Montar ICO manualmente (formato ICO com 3 imagens PNG)
  function buildIco(images) {
    // images: array de { width, height, buffer }
    const count = images.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    const dataOffset = headerSize + dirEntrySize * count;

    let offset = dataOffset;
    const entries = images.map(({ width, height, buffer }) => {
      const entry = {
        width: width >= 256 ? 0 : width,
        height: height >= 256 ? 0 : height,
        size: buffer.length,
        offset,
      };
      offset += buffer.length;
      return entry;
    });

    const totalSize = offset;
    const buf = Buffer.alloc(totalSize);

    // Header
    buf.writeUInt16LE(0, 0);       // reserved
    buf.writeUInt16LE(1, 2);       // type: ICO
    buf.writeUInt16LE(count, 4);   // count

    // Directory entries
    entries.forEach((e, i) => {
      const base = headerSize + i * dirEntrySize;
      buf.writeUInt8(e.width, base);
      buf.writeUInt8(e.height, base + 1);
      buf.writeUInt8(0, base + 2);   // color count
      buf.writeUInt8(0, base + 3);   // reserved
      buf.writeUInt16LE(1, base + 4); // planes
      buf.writeUInt16LE(32, base + 6); // bit count
      buf.writeUInt32LE(images[i].buffer.length, base + 8);
      buf.writeUInt32LE(e.offset, base + 12);
    });

    // Data
    images.forEach(({ buffer }, i) => {
      buffer.copy(buf, entries[i].offset);
    });

    return buf;
  }

  const icoBuffer = buildIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(root, "public", "favicon.ico"), icoBuffer);
  console.log("✓ favicon.ico gerado (16x16, 32x32, 48x48)");
}

main().catch((e) => { console.error(e); process.exit(1); });

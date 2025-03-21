import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ttf2woff from "ttf2woff";
import ttf2woff2 from "ttf2woff2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, "../fonts");

async function convertFonts() {
  try {
    const files = await fs.promises.readdir(fontsDir);

    for (const file of files) {
      if (path.extname(file) === ".ttf") {
        const inputPath = path.join(fontsDir, file);
        const outputWoffPath = inputPath.replace(".ttf", ".woff");
        const outputWoff2Path = inputPath.replace(".ttf", ".woff2");

        const ttfBuffer = await fs.promises.readFile(inputPath);

        const woffBuffer = Buffer.from(ttf2woff(ttfBuffer).buffer);
        await fs.promises.writeFile(outputWoffPath, woffBuffer);

        const woff2Buffer = ttf2woff2(ttfBuffer);
        await fs.promises.writeFile(outputWoff2Path, woff2Buffer);

        console.log(`✅ Converted: ${file} → WOFF & WOFF2`);
      }
    }
  } catch (error) {
    console.error("❌ Error converting fonts:", error);
  }
}

convertFonts();

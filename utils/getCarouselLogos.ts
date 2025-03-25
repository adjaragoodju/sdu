import fs from "fs";
import path from "path";
type Logo = { src: string; alt: string };

export function getCarouselLogos(): Logo[] {
  const folder = path.join(process.cwd(), "public/images/carousel_images");
  const files = fs.readdirSync(folder);

  return files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => ({
      src: `/images/carousel_images/${file}`,
      alt: file.replace(".svg", ""),
    }));
}

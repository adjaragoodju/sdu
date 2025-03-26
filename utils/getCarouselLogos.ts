import fs from "fs";
import path from "path";
export type Logo = { src: string; alt: string };

export function getCarouselLogos(): Logo[] {
  const folder = path.join(process.cwd(), "public/images/carousel");
  const files = fs.readdirSync(folder);

  return files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => ({
      src: `/images/carousel/${file}`,
      alt: file.replace(".svg", ""),
    }));
}

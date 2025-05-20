"use client";
import { Logo } from "@/utils/getCarouselLogos";
import { motion } from "framer-motion";
import "./Carousel.scss";
export function Carousel({ logos }: { logos: Logo[] }) {
  return (
    <div className="motion-container relative w-full overflow-hidden py-16">
      <div className="flex relative overflow-hidden">
        <motion.div
          className="flex flex-none gap-16 pr-16"
          initial={{ translateX: 0 }}
          animate={{ translateX: "-51%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-6"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-none grayscale hover:grayscale-0 transition duration-400"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

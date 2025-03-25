import { motion } from "framer-motion";

type Logo = { src: string; alt: string };

export function Carousel({ logos }: { logos: Logo[] }) {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent">
        <motion.div
          className="flex flex-none gap-16 pr-16"
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
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
                className="h-12 w-auto max-w-none grayscale hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { GALLERY } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Feast your eyes
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY.map((src, i) => (
            <motion.figure
              key={src + i}
              className="group relative overflow-hidden rounded-2xl shadow-soft"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={src}
                alt={`Chaat Street dish ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/0 transition-colors duration-300 group-hover:bg-maroon/30" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

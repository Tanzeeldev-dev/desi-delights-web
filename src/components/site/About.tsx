import { motion } from "motion/react";
import { BRAND, IMAGES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const stats = [
  { value: "100%", label: "Halal" },
  { value: "Daily", label: "Fresh prep" },
  { value: "20+", label: "Spice blends" },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={IMAGES.about}
              alt="Authentic Desi dishes freshly prepared in our kitchen"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary px-7 py-5 shadow-lift sm:block">
            <p className="font-display text-3xl font-extrabold text-primary-foreground">10+</p>
            <p className="text-sm text-primary-foreground/90">years of recipes</p>
          </div>
        </motion.div>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
              Authentic recipes, made with love in the UK
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {BRAND.name} started with a simple idea: bring the buzzing flavours of
              the subcontinent's street corners to your doorstep. We grind our own
              spices, source the freshest produce, and cook everything in small
              batches — just like home.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From tangy chana chaat to golden, crackling samosas, every bite is made
              fresh daily. No shortcuts, no compromise — only honest, delicious Desi
              food.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-card p-4 text-center shadow-soft"
                >
                  <p className="font-display text-2xl font-extrabold text-primary">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

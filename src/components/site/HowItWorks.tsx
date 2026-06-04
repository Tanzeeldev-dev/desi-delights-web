import { motion } from "motion/react";
import { STEPS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Fresh chaat in 3 easy steps
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent sm:block" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-2xl font-extrabold text-primary-foreground shadow-lift">
                {s.step}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

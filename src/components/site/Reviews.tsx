import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Reviews
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Loved by locals
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              4.9 from 800+ reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              className="relative flex flex-col rounded-2xl bg-card p-7 shadow-soft"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="h-9 w-9 text-primary/30" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Tag } from "lucide-react";
import { OFFERS, BRAND } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Offers() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Deals
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Tasty offers, big savings
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <motion.div
              key={o.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Tag className="h-3.5 w-3.5" /> {o.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {o.desc}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl font-extrabold text-primary">
                  {o.price}
                </span>
                <a
                  href={BRAND.orderUrl}
                  className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-maroon"
                >
                  Order
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { MENU, BRAND } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FeaturedMenu() {
  return (
    <section id="menu" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Menu
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Street-food favourites
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every dish is prepped fresh each morning with authentic spices and the
            best ingredients we can source.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((item, i) => (
            <motion.article
              key={item.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
                    {item.tag}
                  </span>
                )}
                <a
                  href={BRAND.orderUrl}
                  className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0"
                >
                  <Plus className="h-4 w-4" /> Add to order
                </a>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

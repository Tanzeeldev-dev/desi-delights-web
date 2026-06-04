import { motion } from "motion/react";
import { Leaf, ChefHat, Truck, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  { icon: Leaf, title: "Fresh Daily", desc: "Prepped every morning — never frozen, always vibrant." },
  { icon: ChefHat, title: "Authentic Recipes", desc: "Family spice blends passed down through generations." },
  { icon: Truck, title: "Fast Delivery", desc: "Hot, fresh and at your door before the cravings hit." },
  { icon: BadgeCheck, title: "100% Halal", desc: "Certified halal ingredients you can fully trust." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Made the right way
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={IMAGES.hero}
          alt="A vibrant spread of fresh Desi street food"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <motion.span
            className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Halal · Made fresh in the UK
          </motion.span>

          <motion.h1
            className="mt-5 text-balance font-display text-5xl font-extrabold leading-[1.02] text-primary-foreground [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Fresh Desi Street Food,{" "}
            <span className="text-primary">Made Daily</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg text-lg text-primary-foreground/90"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            Chana chaat, fruit chaat, golden samosas & crispy pakoras — authentic
            Pakistani & Indian flavours, made with love and delivered hot.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={BRAND.orderUrl}
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-all duration-200 hover:scale-105 hover:bg-maroon"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-full border-2 border-primary-foreground/70 bg-primary-foreground/10 px-8 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-primary-foreground hover:text-maroon"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#menu"
        aria-label="Scroll to menu"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/80 animate-bounce-down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}

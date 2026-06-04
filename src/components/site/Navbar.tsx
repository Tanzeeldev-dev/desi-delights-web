import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className={`font-display text-2xl font-extrabold tracking-tight transition-colors ${
            scrolled ? "text-maroon" : "text-primary-foreground"
          }`}
        >
          <span className="text-primary">Chaat</span>
          {scrolled ? <span className="text-maroon"> Street</span> : <span> Street</span>}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={BRAND.orderUrl}
            className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:scale-105 hover:bg-maroon"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-maroon/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-background p-6 shadow-lift md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-xl font-extrabold text-maroon">
                  <span className="text-primary">Chaat</span> Street
                </span>
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={BRAND.orderUrl}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-maroon"
              >
                Order Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

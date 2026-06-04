import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-maroon py-20 text-primary-foreground sm:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get In Touch
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Hungry? Let's get you fed.
            </h2>
            <p className="mt-4 max-w-md text-lg text-primary-foreground/80">
              Order now for fast, hot delivery — or drop by and grab your favourites
              fresh off the pan.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <a href={BRAND.phoneHref} className="text-lg font-semibold hover:text-primary">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span className="text-primary-foreground/90">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <span className="text-primary-foreground/90">{BRAND.hours}</span>
              </li>
            </ul>

            <a
              href={BRAND.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-all duration-200 hover:scale-105 hover:bg-accent"
            >
              <Phone className="h-5 w-5" /> Order Now
            </a>
          </Reveal>
        </div>

        <motion.div
          className="rounded-2xl bg-card p-7 text-foreground shadow-lift sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                We've got your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <h3 className="font-display text-2xl font-bold">Send us a message</h3>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="What would you like to order?"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-maroon"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

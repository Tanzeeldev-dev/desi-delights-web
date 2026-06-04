import { Instagram, Facebook, MessageCircle, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-extrabold">
              <span className="text-primary">Chaat</span> Street
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Fresh Desi street food, made daily in the UK. Authentic recipes,
              fresh ingredients, made with love.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: BRAND.instagram, label: "Instagram" },
                { icon: Facebook, href: BRAND.facebook, label: "Facebook" },
                { icon: MessageCircle, href: BRAND.whatsapp, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-background">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={BRAND.phoneHref} className="hover:text-primary">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/60">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

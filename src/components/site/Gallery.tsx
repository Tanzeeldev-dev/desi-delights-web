import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { GALLERY } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 3500);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Feast your eyes
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {GALLERY.map((src, i) => (
                <CarouselItem
                  key={src + i}
                  className="basis-3/4 pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={src}
                      alt={`Chaat Street dish ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-maroon/0 transition-colors duration-300 group-hover:bg-maroon/25" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden border-none bg-card text-foreground shadow-soft hover:bg-primary hover:text-primary-foreground sm:flex" />
            <CarouselNext className="hidden border-none bg-card text-foreground shadow-soft hover:bg-primary hover:text-primary-foreground sm:flex" />
          </Carousel>
        </Reveal>

        <div className="mt-7 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i ? "w-7 bg-primary" : "w-2 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
      {/* keep motion import referenced for tree-shaking parity */}
      <motion.span className="sr-only" aria-hidden />
    </section>
  );
}

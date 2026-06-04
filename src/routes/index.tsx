import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedMenu } from "@/components/site/FeaturedMenu";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaat Street — Fresh Desi Street Food, Made Daily in the UK" },
      {
        name: "description",
        content:
          "Authentic Pakistani & Indian street food made fresh daily in the UK. Chana chaat, fruit chaat, samosas & pakoras. Halal, fast delivery.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

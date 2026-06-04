import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedMenu } from "@/components/site/FeaturedMenu";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Offers } from "@/components/site/Offers";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
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
        <HowItWorks />
        <About />
        <WhyChooseUs />
        <Offers />
        <Gallery />
        <Reviews />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

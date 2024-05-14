import HeroAuthorsCard from "./components/hero/HeroAuthorsCard";
import HeroSection from "./components/hero/HeroSection";
import RelatedPage from "./components/related/RelatedPage";
import TestimonialMain from "./components/testimonials/TestimonialMain";

export default function Home() {
  return (
    <section className="bg-[#F5F5F5]">
      <HeroSection />
      <HeroAuthorsCard />
      <TestimonialMain />
      <RelatedPage />
    </section>
  );
}

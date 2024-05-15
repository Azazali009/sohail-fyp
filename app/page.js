import AboutComponent from "./components/AboutComponent";
import HeroAuthorsCard from "./components/hero/HeroAuthorsCard";
import HeroSection from "./components/hero/HeroSection";
import RelatedPage from "./components/related/RelatedPage";
import TestimonialMain from "./components/testimonials/TestimonialMain";

export default function Home() {
  return (
    <section className=" max-w-6xl mx-auto">
      <HeroSection />
      <HeroAuthorsCard />
      <TestimonialMain />
      <AboutComponent />
      <RelatedPage />
    </section>
  );
}

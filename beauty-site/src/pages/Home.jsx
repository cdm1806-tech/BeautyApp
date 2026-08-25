import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import GalleryPreview from "../components/GalleryPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
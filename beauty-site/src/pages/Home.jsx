import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import GalleryPreview from "../components/GalleryPreview";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <Footer />
    </>
  );
}

export default Home;
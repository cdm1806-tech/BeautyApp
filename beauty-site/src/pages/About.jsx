import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">
          About Us
        </h1>

        <p className="text-lg leading-8">
          We specialize in professional makeup,
          nail artistry and beauty services.
          Our goal is to help every client feel
          confident, elegant and beautiful.
        </p>
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default About;
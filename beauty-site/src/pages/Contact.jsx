import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <div className="space-y-4 text-lg">
          <p>Phone: +254 793 864 327</p>
          <p>Email: info@beautystudio.com</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Contact;
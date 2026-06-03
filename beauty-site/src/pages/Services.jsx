import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Services() {
  const services = [
    {
      name: "Professional Makeup",
      description: "Bridal, photoshoots and events.",
      price: "From KSh 2,500",
    },
    {
      name: "Nail Art",
      description: "Gel, acrylic and custom designs.",
      price: "From KSh 1,500",
    },
    {
      name: "Beauty Package",
      description: "Complete makeover experience.",
      price: "From KSh 5,000",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">
          Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">
                {service.name}
              </h2>

              <p className="mb-4">
                {service.description}
              </p>

              <p className="font-semibold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
      <WhatsAppButton />
    </>
  );
}

export default Services;
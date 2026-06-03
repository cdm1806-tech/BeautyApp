import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Booking() {
  return (
    <>
      <Navbar />

      <section className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-8">
          Book Appointment
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-lg"
          />

          <select
            className="w-full p-4 border rounded-lg"
          >
            <option>Select Service</option>
            <option>Makeup</option>
            <option>Nails</option>
            <option>Beauty Package</option>
          </select>

          <button
            className="bg-black text-white px-8 py-4 rounded-lg"
          >
            Book Now
          </button>
        </form>
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Booking;
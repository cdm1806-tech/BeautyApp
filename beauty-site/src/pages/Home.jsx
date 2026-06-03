import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Enhance Your Natural Beauty
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Professional makeup, nail artistry and beauty services
          tailored to your style.
        </p>

        <a
          href="https://wa.me/254793864327"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-8 py-3 rounded-lg hover:scale-105 transition"
        >
          Book on WhatsApp
        </a>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Makeup
            </h3>

            <p>
              Bridal, event and professional makeup services.
            </p>
          </div>

          <div className="shadow p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Nails
            </h3>

            <p>
              Acrylic, gel and customized nail designs.
            </p>
          </div>

          <div className="shadow p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Beauty Packages
            </h3>

            <p>
              Complete beauty experiences for special occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl">
            <p>
              Amazing service and beautiful makeup.
            </p>
            <h4 className="mt-4 font-bold">
              Sarah W.
            </h4>
          </div>

          <div className="p-6 shadow rounded-xl">
            <p>
              Best nail designs I've ever had.
            </p>
            <h4 className="mt-4 font-bold">
              Mary N.
            </h4>
          </div>

          <div className="p-6 shadow rounded-xl">
            <p>
              Professional and highly recommended.
            </p>
            <h4 className="mt-4 font-bold">
              Jane K.
            </h4>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;
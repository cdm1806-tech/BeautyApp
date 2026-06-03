import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  ];

  return (
    <>
      <Navbar />

      <section className="px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">
          Our Gallery
        </h1>

        <p className="text-center mb-12">
          Makeup, nails and beauty transformations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image}
                alt="Beauty work"
                className="w-full h-80 object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Gallery;
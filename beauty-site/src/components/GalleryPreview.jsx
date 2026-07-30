import softGlam from "../assets/gallery/soft_glam.jpeg";
import fullGlam from "../assets/gallery/full_glam.jpeg";
import creativeMakeup from "../assets/gallery/creative_makeup.jpeg";
import creativeMakeup1 from "../assets/gallery/creative_makeup1.jpeg";
import lashes from "../assets/gallery/lashes.jpeg";
import cateyeLashes from "../assets/gallery/cateye_lashes.jpeg";

function GalleryPreview() {
  const gallery = [
    {
      image: softGlam,
      title: "Soft Glam Makeup",
    },
    {
      image: fullGlam,
      title: "Full Glam Makeup",
    },
    {
      image: creativeMakeup,
      title: "Creative Makeup",
    },
    {
      image: creativeMakeup1,
      title: "Creative Art Makeup",
    },
    {
      image: lashes,
      title: "Classic Lashes",
    },
    {
      image: cateyeLashes,
      title: "Cat Eye Lashes",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#1F1F1F]">
        Our Portfolio
        </h2>

        <p className="mt-4 text-[#6B6B6B]">
        Every look is thoughtfully curated to reflect your unique beauty.
        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;

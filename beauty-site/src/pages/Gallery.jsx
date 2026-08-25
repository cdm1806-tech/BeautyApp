import softGlam from "../assets/gallery/soft_glam.jpeg";
import fullGlam from "../assets/gallery/full_glam.jpeg";
import creativeMakeup from "../assets/gallery/creative_makeup.jpeg";
import creativeMakeup1 from "../assets/gallery/creative_makeup1.jpeg";
import lashes from "../assets/gallery/lashes.jpeg";
import catEyeLashes from "../assets/gallery/cateye_lashes.jpeg";

function Gallery() {
  const gallery = [
    {
      image: softGlam,
      title: "Soft Glam",
      category: "Makeup",
    },
    {
      image: fullGlam,
      title: "Full Glam",
      category: "Makeup",
    },
    {
      image: creativeMakeup,
      title: "Creative Makeup",
      category: "Artistry",
    },
    {
      image: creativeMakeup1,
      title: "Creative Makeup",
      category: "Artistry",
    },
    {
      image: lashes,
      title: "Lash Installation",
      category: "Lashes",
    },
    {
      image: catEyeLashes,
      title: "Cat Eye Lashes",
      category: "Lashes",
    },
  ];

  return (
    <main className="bg-[#FAF7F2] min-h-screen">

      {/* Header */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            Our Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mt-5">
            Beauty in Every Detail.
          </h1>

          <p className="mt-6 text-lg text-[#6B6B6B] leading-8">
            Explore a selection of makeup artistry and lash looks
            curated by Nekoye.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {gallery.map((item) => (
              <div
                key={`${item.title}-${item.image}`}
                className="group relative overflow-hidden rounded-2xl bg-white"
              >

                <img
                  src={item.image}
                  alt={`${item.title} by Curated By Nekoye`}
                  className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent pt-20">
                  <p className="text-[#C8A97E] text-sm uppercase tracking-widest">
                    {item.category}
                  </p>

                  <h2 className="text-white text-xl font-semibold mt-1">
                    {item.title}
                  </h2>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Gallery;
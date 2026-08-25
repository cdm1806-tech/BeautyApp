import softGlam from "../assets/gallery/soft_glam.jpeg";

function Hero() {
  return (
    <section className="bg-[#FAF7F2] min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[6px] text-[#C8A97E] font-semibold">
            Beauty, Curated for You.
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mt-5 leading-tight">
            Curated Beauty,
            <br />
            Crafted to Perfection.
          </h1>

          <p className="mt-8 text-lg text-[#6B6B6B] leading-8">
            Professional makeup artistry, luxury lashes,
            and personalized beauty experiences designed
            to make every occasion unforgettable.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">
            <a
              href="/booking"
              className="bg-[#1F1F1F] text-white px-8 py-4 rounded-lg hover:opacity-90 transition"
            >
              Book Appointment
            </a>

            <a
              href="/gallery"
              className="border border-[#1F1F1F] px-8 py-4 rounded-lg text-[#1F1F1F]"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={softGlam}
            alt="Soft Glam Makeup by Curated By Nekoye"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
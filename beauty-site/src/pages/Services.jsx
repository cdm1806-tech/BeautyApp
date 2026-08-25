function Services() {
  const services = [
    {
      title: "Soft Glam Makeup",
      description:
        "A refined, natural-looking glam that enhances your features while keeping the finish elegant and effortless.",
    },
    {
      title: "Full Glam Makeup",
      description:
        "A polished, statement look designed for special occasions, events, photoshoots, and celebrations.",
    },
    {
      title: "Creative Makeup",
      description:
        "Artistic makeup looks that push beyond the ordinary with colour, detail, and creativity.",
    },
    {
      title: "Bridal Makeup",
      description:
        "A carefully curated bridal look designed to complement your style and make your special day unforgettable.",
    },
    {
      title: "Lash Installation",
      description:
        "Beautifully applied lashes selected to complement your eye shape and desired level of definition.",
    },
    {
      title: "Cat Eye Lashes",
      description:
        "A lifted, elongated lash style that creates a sophisticated and striking cat-eye effect.",
    },
  ];

  return (
    <main className="bg-[#FAF7F2] min-h-screen">

      {/* Header */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            Our Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mt-5">
            Beauty, Curated for You.
          </h1>

          <p className="mt-6 text-lg text-[#6B6B6B] leading-8">
            From understated elegance to bold creative looks, every service
            is tailored to bring your vision to life.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <article
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >

                <span className="text-[#C8A97E] tracking-widest text-sm">
                  0{index + 1}
                </span>

                <h2 className="text-2xl font-semibold text-[#1F1F1F] mt-5">
                  {service.title}
                </h2>

                <p className="mt-4 text-[#6B6B6B] leading-7">
                  {service.description}
                </p>

                <a
                  href="https://wa.me/254793864327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-7 border border-[#1F1F1F] px-6 py-3 rounded-lg text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition"
                >
                  Book This Service
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;
function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Personalized Artistry",
      description:
        "Every look is thoughtfully designed around your features, style, and occasion.",
    },
    {
      number: "02",
      title: "Attention to Detail",
      description:
        "From complexion to lashes, every element is carefully refined to create a polished finish.",
    },
    {
      number: "03",
      title: "Quality Experience",
      description:
        "Enjoy a comfortable, professional beauty experience from consultation to final look.",
    },
    {
      number: "04",
      title: "Beauty That Lasts",
      description:
        "We focus on quality products and techniques so your look stays beautiful throughout your occasion.",
    },
  ];

  return (
    <section className="py-24 bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            The Nekoye Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Beauty with intention.
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            At Curated By Nekoye, every detail matters. We create
            personalized beauty experiences that allow you to look
            and feel your absolute best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="border-t border-gray-700 pt-8"
            >
              <span className="text-[#C8A97E] text-sm tracking-widest">
                {reason.number}
              </span>

              <h3 className="text-2xl font-semibold mt-3">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
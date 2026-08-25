function About() {
  return (
    <main className="bg-[#FAF7F2]">

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mt-5">
            Beauty, Curated With Intention.
          </h1>

          <p className="mt-8 text-lg text-[#6B6B6B] leading-8">
            Curated By Nekoye is a beauty studio focused on thoughtful
            makeup artistry, beautiful lashes, and personalized beauty
            experiences.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-[#1F1F1F] min-h-[450px] rounded-3xl flex items-center justify-center">
            <p className="text-[#C8A97E] uppercase tracking-[6px] text-center px-8">
              Curated By Nekoye
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-[#C8A97E] font-semibold">
              Our Approach
            </p>

            <h2 className="text-4xl font-bold text-[#1F1F1F] mt-4">
              Your beauty. Your style. Your moment.
            </h2>

            <p className="mt-6 text-[#6B6B6B] leading-8">
              We believe makeup should enhance rather than hide what makes
              you unique. Every appointment is approached with attention
              to detail, creativity, and an understanding of the individual
              behind the look.
            </p>

            <p className="mt-5 text-[#6B6B6B] leading-8">
              From soft, understated glam to expressive creative artistry,
              our goal is to create a look that feels authentic to you
              while making every occasion feel special.
            </p>

            <a
              href="/booking"
              className="inline-block mt-8 bg-[#1F1F1F] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book an Appointment
            </a>
          </div>

        </div>
      </section>

      {/* Brand statement */}
      <section className="py-24 bg-[#C8A97E]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-3xl md:text-5xl font-bold text-[#1F1F1F] leading-tight">
            "Beauty, Curated for You."
          </p>

          <p className="mt-6 text-[#1F1F1F]/70 text-lg">
            Professional artistry with a personal touch.
          </p>

        </div>
      </section>

    </main>
  );
}

export default About;
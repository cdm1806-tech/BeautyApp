function CallToAction() {
  return (
    <section className="py-24 bg-[#C8A97E]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[5px] text-[#1F1F1F] font-semibold">
          Your Beauty Experience Awaits
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-[#1F1F1F] mt-5">
          Ready to Be Curated?
        </h2>

        <p className="mt-6 text-[#1F1F1F]/70 text-lg leading-8 max-w-2xl mx-auto">
          Whether you're preparing for a special occasion or simply
          want to treat yourself, let's create a look that's uniquely yours.
        </p>

        <a
          href="https://wa.me/254793864327"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-[#1F1F1F] text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book Your Appointment
        </a>

      </div>
    </section>
  );
}

export default CallToAction;
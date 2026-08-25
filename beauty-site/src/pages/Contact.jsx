function Contact() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">

      {/* Header */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] mt-5">
            Let's Create Your Look.
          </h1>

          <p className="mt-6 text-lg text-[#6B6B6B] leading-8">
            Have a question, want to discuss a look, or ready to book?
            We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">

              <p className="uppercase tracking-[4px] text-[#C8A97E] font-semibold">
                Contact
              </p>

              <h2 className="text-3xl font-bold text-[#1F1F1F] mt-4">
                Curated By Nekoye
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm text-[#6B6B6B]">
                    Location
                  </p>

                  <p className="font-semibold text-[#1F1F1F] mt-1">
                    Nakuru, Kenya
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#6B6B6B]">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/254793864327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1F1F1F] mt-1 inline-block hover:text-[#C8A97E] transition"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>

                <div>
                  <p className="text-sm text-[#6B6B6B]">
                    Instagram
                  </p>

                  <a
                    href="https://instagram.com/curatedbynekoey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1F1F1F] mt-1 inline-block hover:text-[#C8A97E] transition"
                  >
                    Follow us on Instagram
                  </a>
                </div>

                <div>
                  <p className="text-sm text-[#6B6B6B]">
                    TikTok
                  </p>

                  <a
                    href="#"
                    className="font-semibold text-[#1F1F1F] mt-1 inline-block hover:text-[#C8A97E] transition"
                  >
                    Follow us on TikTok
                  </a>
                </div>

              </div>

            </div>

            {/* Booking Card */}
            <div className="bg-[#1F1F1F] rounded-2xl p-8 md:p-10 text-white">

              <p className="uppercase tracking-[4px] text-[#C8A97E] font-semibold">
                Appointments
              </p>

              <h2 className="text-3xl font-bold mt-4">
                Ready to book?
              </h2>

              <p className="mt-6 text-gray-400 leading-7">
                Choose your preferred service and appointment time.
                We'll confirm the details with you through WhatsApp.
              </p>

              <a
                href="/booking"
                className="inline-block mt-8 bg-white text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-[#C8A97E] transition"
              >
                Book Your Appointment
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 bg-[#C8A97E]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#1F1F1F] font-semibold">
            Follow The Journey
          </p>

          <h2 className="text-4xl font-bold text-[#1F1F1F] mt-4">
            @CuratedByNekoye
          </h2>

          <p className="mt-5 text-[#1F1F1F]/70">
            Discover new looks, beauty inspiration, and recent work.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Contact;
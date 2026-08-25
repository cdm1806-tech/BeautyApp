function Testimonials() {
  const testimonials = [
    {
      name: "Client One",
      service: "Soft Glam Makeup",
      review:
        "I loved how natural and elegant the final look was. Every detail was carefully done.",
    },
    {
      name: "Client Two",
      service: "Full Glam Makeup",
      review:
        "The entire experience was amazing. The makeup was flawless and lasted throughout the event.",
    },
    {
      name: "Client Three",
      service: "Lash Installation",
      review:
        "My lashes looked beautiful and felt so comfortable. I will definitely be coming back.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            Client Love
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-[#6B6B6B]">
            Beautiful experiences, memorable looks, and clients who leave
            feeling confident.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="text-[#C8A97E] text-2xl">
                “
              </div>

              <p className="mt-4 text-[#6B6B6B] leading-7">
                {testimonial.review}
              </p>

              <div className="mt-8 border-t pt-5">
                <h3 className="font-semibold text-[#1F1F1F]">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-[#6B6B6B] mt-1">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
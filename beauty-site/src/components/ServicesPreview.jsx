function ServicesPreview() {

  const services = [
    "Soft Glam Makeup",
    "Full Glam Makeup",
    "Creative Makeup",
    "Bridal Makeup",
    "Lash Installation",
    "Cat Eye Lashes",
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center font-bold text-[#1F1F1F]">
          Featured Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((service) => (

            <div
              key={service}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold text-[#1F1F1F]">
                {service}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;
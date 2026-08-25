import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "2547XXXXXXXX";

    const message = `
Hello Curated By Nekoye,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Additional Details:
${formData.message || "None"}

Thank you.
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-[#FAF7F2] min-h-screen">

      {/* Header */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#C8A97E] font-semibold">
            Appointments
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1F1F1F] mt-5">
            Book Your Appointment
          </h1>

          <p className="mt-6 text-lg text-[#6B6B6B] leading-8">
            Tell us what you're looking for and your preferred
            appointment time. We'll confirm your booking via WhatsApp.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
          >

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  placeholder="07XX XXX XXX"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Service
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                >
                  <option value="">Select a service</option>
                  <option value="Soft Glam Makeup">
                    Soft Glam Makeup
                  </option>
                  <option value="Full Glam Makeup">
                    Full Glam Makeup
                  </option>
                  <option value="Creative Makeup">
                    Creative Makeup
                  </option>
                  <option value="Bridal Makeup">
                    Bridal Makeup
                  </option>
                  <option value="Lash Installation">
                    Lash Installation
                  </option>
                  <option value="Cat Eye Lashes">
                    Cat Eye Lashes
                  </option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

            </div>

            {/* Additional message */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Additional Details
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                placeholder="Tell us anything else we should know..."
              />
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-[#1F1F1F] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Continue to WhatsApp
            </button>

            <p className="text-center text-sm text-[#6B6B6B] mt-4">
              Your request will open in WhatsApp for confirmation.
            </p>

          </form>

        </div>
      </section>

    </main>
  );
}

export default Booking;
const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Contact Us 📩
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, suggestions, or want to help? We’d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              Get in Touch 💬
            </h2>

            <p className="text-gray-600 mb-6">
              GreenPlate is a community-based platform. Feel free to reach out for
              any support, collaboration, or feedback.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                support@greenplate.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                +880 1234 567 890
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-6">
              Send us a message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />

              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>

              <button className="btn btn-primary w-full hover:bg-purple-400">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;

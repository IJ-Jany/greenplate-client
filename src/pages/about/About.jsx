const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            About GreenPlate 🍃
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            GreenPlate is a community-driven platform where people can share
            excess food with others for free, reducing food waste and spreading kindness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              🌍 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every day, tons of food go to waste while many people struggle to get a proper meal.
              Our mission is to connect people who have extra food with those who need it —
              completely free of cost.
            </p>
          </div>

          <div className="bg-green-100 rounded-2xl p-8 shadow">
            <ul className="space-y-4 text-gray-700">
              <li>✅ Reduce food waste</li>
              <li>✅ Help people in need</li>
              <li>✅ Build a caring community</li>
              <li>✅ Promote sustainable living</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            ⚙️ How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🍱 Share Food</h3>
              <p className="text-gray-600">
                Anyone can post available free food with details and pickup location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">📍 Request Food</h3>
              <p className="text-gray-600">
                Users can browse available food and request what they need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🤝 Connect</h3>
              <p className="text-gray-600">
                Donors and receivers connect directly to share food safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            💚 Why GreenPlate Matters
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            By sharing food instead of wasting it, we create a positive impact on society,
            support people in need, and take a step towards a greener future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

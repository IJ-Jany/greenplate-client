const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          Platform Features 🌿
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["🆓", "100% Free", "No cost, no hidden fees"],
            ["⚡", "Quick Posting", "Post food in seconds"],
            ["📍", "Nearby Pickup", "Find food near you"],
            ["🔒", "Secure Users", "Verified community"],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
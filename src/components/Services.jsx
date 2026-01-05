const Services = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Our Services 🤝
          </h2>
          <p className="text-gray-600 mb-6">
            We make food sharing simple, fast, and impactful.
          </p>
          <ul className="space-y-3">
            <li>✅ Food donation posting</li>
            <li>✅ Food request system</li>
            <li>✅ User food management</li>
            <li>✅ Community safety guidelines</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-600">
            Because sharing food should be easy, safe, and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
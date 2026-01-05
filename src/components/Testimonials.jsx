const Testimonials = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          What People Say 💬
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Amazing platform!", "Helped my community", "Simple & useful"].map(
            (text, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-600 mb-4">“{text}”</p>
                <h4 className="font-semibold">User {i + 1}</h4>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Testimonials
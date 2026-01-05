const Blogs = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Latest Blogs ✍️
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="shadow rounded-xl overflow-hidden">
              <div className="h-40 bg-green-200"></div>
              <div className="p-5">
                <h3 className="font-semibold mb-2">Food Waste Awareness</h3>
                <p className="text-gray-600 text-sm">
                  Learn how food sharing can change lives.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs
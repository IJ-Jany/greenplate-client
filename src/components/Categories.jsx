const Categories = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Food Categories 🍽️
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Cooked Meals", "Fruits", "Bakery Items", "Packaged Food"].map(
            (cat, i) => (
              <div
                key={i}
                className="bg-green-100 rounded-xl p-6 text-center font-semibold hover:bg-green-200 transition"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Categories;
const Statistics = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        {[
          ["500+", "Meals Shared"],
          ["300+", "Active Users"],
          ["50+", "Daily Donations"],
          ["100%", "Free"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-green-700">{num}</h3>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Statistics;
const Highlights = () => {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">Zero Waste</h3>
          <p className="opacity-90">Save food from going to waste</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">Community Driven</h3>
          <p className="opacity-90">Built by people, for people</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">Eco Friendly</h3>
          <p className="opacity-90">Helping the planet</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
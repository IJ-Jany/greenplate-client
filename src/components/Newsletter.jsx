const Newsletter = () => {
  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter 📬</h2>
      <p className="mb-6 opacity-90">
        Get updates about food sharing and community impact.
      </p>
      <div className="flex justify-center gap-2">
        <input
          className="input input-bordered text-black"
          placeholder="Your email"
        />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </section>
  );
};
export default Newsletter
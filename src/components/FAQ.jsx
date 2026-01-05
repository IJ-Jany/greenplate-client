const FAQ = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Frequently Asked Questions ❓
        </h2>

        {[
          "Is GreenPlate free?",
          "Who can share food?",
          "Is food safety ensured?",
        ].map((q, i) => (
          <div key={i} className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="faq" />
            <div className="collapse-title font-medium">{q}</div>
            <div className="collapse-content text-gray-600">
              Yes, GreenPlate is completely free and community-driven.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;
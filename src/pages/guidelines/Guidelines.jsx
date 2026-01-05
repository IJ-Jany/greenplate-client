const Guidelines = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="bg-green-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Community Guidelines 📜
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          To keep GreenPlate safe and helpful for everyone, please follow these guidelines.
        </p>
      </section>

      {/* Guidelines */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">✅ Share Safe Food</h3>
            <p className="text-gray-600">
              Only share fresh, edible, and properly stored food items.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🤝 Be Respectful</h3>
            <p className="text-gray-600">
              Treat all users with kindness and respect at all times.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">📍 Honest Information</h3>
            <p className="text-gray-600">
              Provide accurate food details and pickup location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🚫 No Selling</h3>
            <p className="text-gray-600">
              GreenPlate is strictly for free food sharing. Selling is not allowed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;

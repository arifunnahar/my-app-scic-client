export function WhyChooseUs() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We focus on sustainability, customer satisfaction, and premium
          product quality to give you the best experience.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">✔ Trusted Sellers</div>
          <div className="bg-white p-6 rounded-xl shadow">✔ Affordable Pricing</div>
          <div className="bg-white p-6 rounded-xl shadow">✔ Secure Platform</div>
        </div>
      </div>
    </section>
  );
}

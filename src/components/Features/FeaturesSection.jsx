export function FeaturesSection() {
  const features = [
    { title: "Eco Friendly", desc: "All products are safe for nature and environment." },
    { title: "Quality Products", desc: "We ensure premium quality for every item." },
    { title: "Fast Delivery", desc: "Quick and reliable delivery service." },
    { title: "Trusted Platform", desc: "Hundreds of happy customers trust us." },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Features
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

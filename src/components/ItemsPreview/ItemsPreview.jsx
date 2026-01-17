export function ItemsPreview() {
  const items = [
    { name: "Organic Fertilizer", price: "$15.99" },
    { name: "Plant Pot", price: "$8.99" },
    { name: "Garden Tools", price: "$22.50" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Popular Items</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-gray-600">
              Amazing quality products and fast delivery!
            </p>
            <h4 className="mt-3 font-semibold">– Rahim</h4>
          </div>

          <div className="p-6 border rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-2 text-gray-600">
              Best eco-friendly platform I’ve used.
            </p>
            <h4 className="mt-3 font-semibold">– Ayesha</h4>
          </div>

          <div className="p-6 border rounded-xl">
            ⭐⭐⭐⭐☆
            <p className="mt-2 text-gray-600">
              Good service and helpful support.
            </p>
            <h4 className="mt-3 font-semibold">– Karim</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

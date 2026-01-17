export default function HeroSection() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Grow Green, Live Clean 🌱
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover eco-friendly products that help you grow plants, 
            protect nature, and build a sustainable future.
          </p>

          <div className="mt-6">
            <a
              href="/product"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-md"
            >
              View Items
            </a>
          </div>
        </div>

       {/* Right Image */}
<div className="flex justify-center">
  <img
    src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg" 
    alt="Eco friendly plants"
    className="rounded-2xl shadow-xl w-full max-w-md object-cover transform hover:scale-105 transition duration-500"
  />
</div>

      </div>
    </section>
  );
}
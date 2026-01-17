export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-center text-gray-900">
          About Us
        </h1>

        <p className="mt-6 text-gray-600 text-center max-w-3xl mx-auto">
          We are dedicated to promoting sustainable and eco-friendly living.
          Our platform connects people with high-quality green products that
          help protect the environment and support healthy lifestyles.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to make eco-friendly products accessible to
              everyone and encourage sustainable living across communities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600">
              We envision a greener future where people choose nature-friendly
              products and live in harmony with the environment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

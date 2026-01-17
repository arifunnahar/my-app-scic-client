export function CTASection() {
  return (
    <section className="py-20 bg-green-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to Explore Green Products?
      </h2>
      <p className="mt-4">
        Login now and start your eco-friendly journey today.
      </p>

      <div className="mt-6">
        <a
          href="/login"
          className="bg-white text-green-600 px-6 py-3 rounded-md font-medium"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

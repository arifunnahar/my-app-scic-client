export default function ContactPage() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We’re always happy to hear from you. Reach out to us using the
          information below and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 mt-2">support@greenhub.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600 mt-2">+880 1234-567890</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600 mt-2">Dhaka, Bangladesh</p>
          </div>

        </div>

       

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/login"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium"
          >
            Get Started With Us
          </a>
        </div>

      </div>
    </section>
  );
}

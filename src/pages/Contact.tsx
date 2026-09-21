export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-black">
          Contact Us
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border-2 border-blue-600 bg-white p-6 text-center shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-blue-600">
              Phone
            </h2>
            <p className="text-lg text-black">
              +977 9800000000
            </p>
          </div>

          <div className="rounded-xl border-2 border-green-600 bg-white p-6 text-center shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-green-600">
              Email
            </h2>
            <p className="text-lg text-black">
              contact@example.com
            </p>
          </div>

          <div className="rounded-xl border-2 border-red-600 bg-white p-6 text-center shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-red-600">
              Address
            </h2>
            <p className="text-lg text-black">
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
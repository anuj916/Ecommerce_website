import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    id: 1,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-xl border-2 border-blue-600 bg-white p-8">

        <h1 className="mb-6 text-3xl font-bold text-blue-600">
          User Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold text-black">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border-2 border-blue-600 px-4 py-3 text-black outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border-2 border-green-600 px-4 py-3 text-black outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full rounded-lg border-2 border-red-600 px-4 py-3 text-black outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full rounded-lg border-2 border-amber-800 px-4 py-3 text-black outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit
          </button>

        </form>

        
        <div className="mt-8 rounded-lg border-2 border-green-600 p-5">
          <h2 className="mb-4 text-xl font-bold text-green-600">
            User Information
          </h2>

          <p className="text-black">
            <strong>Name:</strong> {user.name}
          </p>

          <p className="text-black">
            <strong>Email:</strong> {user.email}
          </p>

          <p className="text-black">
            <strong>Phone:</strong> {user.phone}
          </p>

          <p className="text-black">
            <strong>Address:</strong> {user.address}
          </p>
        </div>

      </div>
    </div>
  );
}
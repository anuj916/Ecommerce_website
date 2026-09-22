import {user } from "../Data/User";

export default function Profile() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg">


        <div className="mb-8 rounded-xl bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold">
            User Profile
          </h1>

          <p className="mt-2 text-white">
            Welcome, {user.name}
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold text-black">
            Personal Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">

  
            <div className="rounded-lg border-2 border-blue-600 p-4">
              <p className="text-sm font-medium text-blue-600">
                Full Name
              </p>

              <p className="mt-1 font-semibold text-black">
                {user.name}
              </p>
            </div>

   
            <div className="rounded-lg border-2 border-green-600 p-4">
              <p className="text-sm font-medium text-green-600">
                Email
              </p>

              <p className="mt-1 font-semibold text-black">
                {user.email}
              </p>
            </div>

      
            <div className="rounded-lg border-2 border-red-600 p-4">
              <p className="text-sm font-medium text-red-600">
                Phone
              </p>

              <p className="mt-1 font-semibold text-black">
                {user.phone}
              </p>
            </div>

    
            <div className="rounded-lg border-2 border-amber-800 p-4">
              <p className="text-sm font-medium text-amber-800">
                Address
              </p>

              <p className="mt-1 font-semibold text-black">
                {user.address}
              </p>
            </div>

          </div>
        </div>

     
        <div className="mt-8 rounded-lg border-2 border-green-600 p-4">
          <p className="font-semibold text-green-600">
            Account Status
          </p>

          <p className="mt-1 font-medium text-black">
            Active
          </p>
        </div>

      </div>
    </div>
  );
}
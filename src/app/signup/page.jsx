'use client';  // Ensures that the code runs on the client side

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router in Next.js 13+
import Image from "next/image";

const Signup = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cell: "",
    email: "",
    address: ""
  });

  const router = useRouter();  // Use useRouter for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful signup action
    alert("Sign up successful!");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Image with Overlay and Logo */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* Background Image */}
        <Image
          src="/bg.jpeg"
          alt="Society"
          layout="fill"
          objectFit="cover"
          priority
        />
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        
        {/* Logo Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/DHA.png" // Change this to the path of your logo image
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"> {/* Reduced max-width and padding */}
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
            Member Signup
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}> {/* Handle form submit */}
            {/* ID Field */}
            <div>
              <label className="block text-gray-600">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your ID"
              />
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Name"
              />
            </div>

            {/* Cell Field */}
            <div>
              <label className="block text-gray-600">Cell</label>
              <input
                type="text"
                name="cell"
                value={formData.cell}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Cell Number"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-gray-600">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-500 mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

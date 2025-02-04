'use client';  // Make sure the component is client-side

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();  // Initialize useRouter

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can improve this part)
    if (formData.email && formData.password) {
      // Simulate successful login (Replace with real validation logic)
      alert("Login successful!");

      // Redirect to the home page or dashboard
      router.push("/home");  // Redirect to the home page
    } else {
      alert("Please fill out all fields.");
    }
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Member Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600">Member ID </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            {/* Using Next.js Link for Sign up navigation */}
            <Link href="/signup">
              <span className="text-blue-600 hover:underline">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

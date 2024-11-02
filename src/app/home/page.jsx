import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[540px] flex items-center justify-center text-center text-white bg-cover bg-center bg-[url('/Images/aboutPage.jpg')]">
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="z-10 max-w-3xl px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Helping Hands for a Better Tomorrow</h1>
          <p className="mt-4 text-lg">Join us in making a difference by supporting our mission to improve lives and communities.</p>
          <a href="#donate" className="mt-6 inline-block bg-yellow-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-yellow-600">Donate Now</a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">Empowering individuals with education to foster sustainable growth in communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <p className="text-gray-600">Providing essential healthcare services to improve quality of life and prevent diseases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">Promoting environmental sustainability for a cleaner and healthier planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="donate" className="py-16 bg-yellow-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Your support helps us continue our programs and reach more communities in need. Every contribution counts!
        </p>
        <a href="#donate" className="inline-block bg-white text-yellow-500 py-3 px-8 rounded-md font-semibold hover:bg-gray-100">
          Donate Now
        </a>
      </section>
    </div>
  );
}

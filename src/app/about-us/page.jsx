import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-100 font-sans leading-relaxed tracking-wide">
      {/* Hero Section */}
      <section className="relative text-white py-16 bg-cover bg-center bg-[url('/Images/aboutUsPage.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Learn more about our mission, values, and impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower communities through sustainable
                development, education, and healthcare initiatives. We strive to
                create lasting change by focusing on local empowerment and
                resilience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where everyone has equal access to
                resources, education, and opportunities to thrive. By building
                strong partnerships and community support, we work towards
                achieving a future filled with hope and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                1,000+ Children Educated
              </h3>
              <p className="text-gray-600 mt-4">
                Through our education programs, we’ve empowered children with
                the knowledge and skills to thrive.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                500+ Families Supported
              </h3>
              <p className="text-gray-600 mt-4">
                Our healthcare initiatives have provided essential services to
                communities in need.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">
                300+ Projects Completed
              </h3>
              <p className="text-gray-600 mt-4">
                We’ve launched projects that enhance community infrastructure
                and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                John Smith
              </h3>
              <p className="text-gray-500">Program Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Emma Williams
              </h3>
              <p className="text-gray-500">Head of Outreach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 NGO Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;

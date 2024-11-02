import React from 'react';

const Page = () => {
  return (
    <div className="">
      
      {/* Header Section */}
      <section className="relative text-white py-16 bg-cover bg-center bg-[url('/Images/aboutUsPage.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-white text-4xl font-bold">Donate Us</h1>
          <p className="mt-4 text-lg">
            Learn more about our mission, values, and impact.
          </p>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-600 text-center">Sankalp Foundation</h2>
        <div className="mt-6">
          <p className="text-gray-700"><strong>Bank:</strong> Bank of Baroda, Samner Branch, Jalgaon</p>
          <p className="text-gray-700"><strong>Account No:</strong> 20880100003697</p>
          <p className="text-gray-700"><strong>IFSC Code:</strong> BARB0SAMPAC</p>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          All donations are tax exempted under section 80G.
        </p>
      </section>

      {/* Donation Information Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">Important Information about Your Donation</h3>
        <div className="space-y-4">
          <p className="text-gray-700">
            Donations to Sankalp are exempt from 50% tax under Section 80G of the Income Tax Act. Tax exemption is valid only in India.
          </p>
          <p className="text-gray-700">
            <strong>Note:</strong> Please avoid making a donation of less than Rs.500/- as the processing costs make it unviable for us.
          </p>
          <p className="text-gray-700">
            <strong>Disclaimer:</strong> All funds/donations raised by Sankalp are allocated to rural environment and education activities depending on the need on the ground.
          </p>
          <p className="text-green-600 underline text-center">
            Have any questions? <a href="#" className="text-green-700 hover:text-green-900">Click here</a>
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Join Us as Volunteers, Trainers, Speakers, etc.</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Help us make a lasting impact in the community. Together, we can uplift and empower rural lives.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300">
          Become a Volunteer
        </button>
      </section>
    </div>
  );
};

export default Page;

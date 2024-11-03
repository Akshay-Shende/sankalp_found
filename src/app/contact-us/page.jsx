"use client"
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.log(response);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="bg-gray-100 font-sans leading-relaxed tracking-wide">
      
      {/* Header Section */}
      <section className="relative text-white py-16 bg-cover bg-center bg-[url('/Images/aboutUsPage.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We’d love to hear from you! Whether you have a question, want to volunteer, or just want to connect.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-600 text-center">Sankalp Foundation</h2>
        <div className="mt-6 space-y-4">
          <p className="text-gray-700"><strong>Address:</strong> Samner Branch, Jalgaon, Maharashtra, India</p>
          <p className="text-gray-700"><strong>Phone:</strong> +91 9876543210</p>
          <p className="text-gray-700"><strong>Email:</strong> contact@sankalpfoundation.org</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto mb-12 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Send Us a Message</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </section>

      {/* Location Section */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-6">Our Location</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Visit us at our office to learn more about our work and how you can get involved.
        </p>
        <div className="relative w-full h-64 bg-gray-200 rounded-md overflow-hidden">
          {/* Replace src with actual Google Maps embed link if available */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991414944!2d-74.25986638662794!3d40.69767006484998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQxNjAuOCIgTiA3NMKwMTUnMzguOCJX!5e0!3m2!1sen!2sin!4v1618307578820!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Page;

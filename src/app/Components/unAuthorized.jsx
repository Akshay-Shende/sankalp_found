"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  const goBack = () => router.back(); // Go back to the previous page

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized</h1>
      <p className="text-lg text-gray-700 mb-6">
        You do not have permission to view this page.
      </p>
      <button
        onClick={goBack}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-150"
      >
        Go Back
      </button>
    </div>
  );
};

export default Unauthorized;

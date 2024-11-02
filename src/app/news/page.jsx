import React from 'react'

const Page = () => {
  return (
    <div>
    <section className="relative text-white py-16 bg-cover bg-center bg-[url('/Images/aboutUsPage.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-white text-4xl font-bold">News</h1>
          <p className="mt-4 text-lg">
            Learn more about our mission, values, and impact.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Page

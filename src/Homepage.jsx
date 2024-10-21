import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import hero from '../src/photoharu/hero.jpg'

function Homepage() {
  return (
    <>
        <Navbar/>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src={hero}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Start Shopping Today</h2>

        <p className="mt-4 text-gray-600">
        Our online shopping platform offers a seamless and user-friendly experience for purchasing a wide variety of products. Customers can easily browse, select, and place orders, with secure payment options and real-time order tracking. Designed for convenience, it ensures a smooth checkout process and timely delivery
        </p>

        <NavLink
          to="/shoppage"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Start Shopping
        </NavLink>
      </div>
    </div>
  </div>
</section>


<Footer/>


    </>
  )
}

export default Homepage
// pages/index.js
'use client';
import React from 'react';
import Footer from './footer/page';
import Image from 'next/image';
import Navbar from './navbar/page';
import landingIMG from '../images/8.jpeg';
import servicesIMG from '../images/3.jpeg';
import background from '../images/bkg.jpg';
import customCarpentry from '../images/10.jpeg';
import interiorDesign from '../images/6.jpeg';
import furnitureDesign from '../images/11.jpeg';
import roomRedesign from '../images/13.jpeg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">
      <Navbar />
      <main className="flex-1">
        {/* Landing Section with Full Page Image and Overlay Text */}
        <div className="relative h-screen">
          <Image
            src={landingIMG}
            alt="Landing"
            className="w-full h-full object-cover"
            layout="fill" // Ensures the image covers the entire viewport
          />
          <div className="absolute top-1/2 left-8 transform -translate-y-1/4 max-w-2xl w-full backdrop-blur-sm bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white font-playfair">
              Welcome to Zafari CC Design
            </h1>
            <p className="text-xl text-white leading-relaxed font-serif protest-strike-regular">
              Zafari CC Design is a custom carpentry and interior design company built on craftsmanship,
              creativity, and a love for detail. We take pride in creating spaces that feel personal,
              functional, and beautifully designed.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="mt-12 flex justify-center items-center gap-6">
  <div className="flex gap-6 w-full max-w-screen-xl">
    {/* Card 1 */}
    <div className="w-1/4 h-[400px] perspective-1000" onClick={() => handleCardClick(1)}>
      <div className="w-full h-full group relative transform-style-preserve-3d duration-500 hover:rotate-y-180">
        {/* Front Side */}
        <div className="w-full h-full bg-cover bg-center rounded-lg shadow-lg transform-style-preserve-3d transition-all" style={{ backgroundImage: `url(${customCarpentry})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Custom Carpentry</h3>
            <p className="text-white text-lg mt-2">Tailored carpentry solutions to meet your unique needs.</p>
          </div>
        </div>

        {/* Back Side (flipped) */}
        <div className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg transform rotate-y-180 bg-opacity-50" style={{ backgroundImage: `url(${customCarpentry})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Custom Carpentry</h3>
            <p className="text-white text-lg mt-2">This is the back side with the same image showing details!</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-1/4 h-[400px] perspective-1000" onClick={() => handleCardClick(2)}>
      <div className="w-full h-full group relative transform-style-preserve-3d duration-500 hover:rotate-y-180">
        {/* Front Side */}
        <div className="w-full h-full bg-cover bg-center rounded-lg shadow-lg transform-style-preserve-3d transition-all" style={{ backgroundImage: `url(${interiorDesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Interior Design</h3>
            <p className="text-white text-lg mt-2">Creative designs to transform your space into a work of art.</p>
          </div>
        </div>

        {/* Back Side (flipped) */}
        <div className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg transform rotate-y-180 bg-opacity-50" style={{ backgroundImage: `url(${interiorDesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Interior Design</h3>
            <p className="text-white text-lg mt-2">This is the back side with more information about Interior Design.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-1/4 h-[400px] perspective-1000" onClick={() => handleCardClick(3)}>
      <div className="w-full h-full group relative transform-style-preserve-3d duration-500 hover:rotate-y-180">
        {/* Front Side */}
        <div className="w-full h-full bg-cover bg-center rounded-lg shadow-lg transform-style-preserve-3d transition-all" style={{ backgroundImage: `url(${furnitureDesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Furniture Design</h3>
            <p className="text-white text-lg mt-2">Custom furniture that adds style and functionality to your home.</p>
          </div>
        </div>

        {/* Back Side (flipped) */}
        <div className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg transform rotate-y-180 bg-opacity-50" style={{ backgroundImage: `url(${furnitureDesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Furniture Design</h3>
            <p className="text-white text-lg mt-2">This is the back side showing more details about furniture design.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="w-1/4 h-[400px] perspective-1000" onClick={() => handleCardClick(4)}>
      <div className="w-full h-full group relative transform-style-preserve-3d duration-500 hover:rotate-y-180">
        {/* Front Side */}
        <div className="w-full h-full bg-cover bg-center rounded-lg shadow-lg transform-style-preserve-3d transition-all" style={{ backgroundImage: `url(${roomRedesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Room Redesign</h3>
            <p className="text-white text-lg mt-2">Reimagine your space with our room redesign services.</p>
          </div>
        </div>

        {/* Back Side (flipped) */}
        <div className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg transform rotate-y-180 bg-opacity-50" style={{ backgroundImage: `url(${roomRedesign})` }}>
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded-lg h-full">
            <h3 className="text-white text-2xl font-semibold">Room Redesign</h3>
            <p className="text-white text-lg mt-2">This is the back side with additional info on room redesign.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Why Choose Us Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-700 leading-relaxed">
            Our projects are a collaboration between our craftsmanship and your vision. We listen closely
            to our clients, ensuring each space is crafted with care and precision, resulting in both
            functional and beautiful environments.
          </p>
          <div className="w-full h-64 bg-gradient-to-r from-pink-300 to-red-300 rounded-lg shadow-lg mt-6 animate-pulse">
            <p className="text-gray-600 text-center pt-24">Customer Experience Image Placeholder</p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">Have a project in mind? Reach out to us to discuss your ideas and get a personalized quote.</p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-all">Get in Touch</a>
          <div className="w-full h-64 bg-gradient-to-r from-teal-300 to-indigo-300 rounded-lg shadow-lg mt-6 animate-pulse">
            <p className="text-gray-600 text-center pt-24">Contact Image Placeholder</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

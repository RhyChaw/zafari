"use client";

// pages/about.js
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { useLogo } from '@/contexts/LogoContext';

export default function About() {
  const { imageUrl, setImageUrl } = useLogo();
  return (
    <>
    <Navbar imageUrl={imageUrl} setImageUrl={setImageUrl}/>
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] py-8">
        <div className="container mx-auto flex flex-col items-center text-center text-white">
          {/* Title and Subtitle */}
          <h1 className="text-4xl font-bold mb-4">Zafari CC Design</h1>
          <p className="text-xl font-medium">Specializing in Custom Carpentry and Interior Design</p>
        </div>
      </section>

      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section (Image or Video) */}
          <div className="flex justify-center items-center">
            <Image
              src="/path-to-your-image.jpg"
              alt="Interior Design"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Right Section (Services, Features, Contact) */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <p className="text-lg mb-4">
              Zafari CC Design is a premier interior and carpentry company known for our luxury kitchens,
              entertainment centers, custom cabinetry, and other special interior services.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Luxury kitchen</li>
              <li>Entertainment center</li>
              <li>Interior trimming</li>
              <li>Walkout basement</li>
              <li>Custom Cupboards</li>
              <li>Cabinets, Ceilings, and Drywalls</li>
            </ul>
            <p className="text-lg">
              We are fully insured and offer financing options for all our services. Your dream space is just a
              call away.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

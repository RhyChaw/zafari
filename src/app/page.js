// pages/index.js
'use client';
import React from 'react';
import Footer from './footer/page';
import Image from 'next/image';
import Navbar from './navbar/page';
import landingIMG from '../images/8.jpeg';
import customCarpentry from '../images/10.jpeg';
import interiorDesign from '../images/6.jpeg';
import furnitureDesign from '../images/11.jpeg';
import roomRedesign from '../images/13.jpeg';
import styles from './flipcard.module.css';

export default function Home() {
  const services = [
    { title: 'Custom Carpentry', description: 'Tailored solutions to meet your unique needs.', img: customCarpentry },
    { title: 'Interior Design', description: 'Creative designs to transform your space.', img: interiorDesign },
    { title: 'Furniture Design', description: 'Custom furniture that adds style to your home.', img: furnitureDesign },
    { title: 'Room Redesign', description: 'Reimagine your space with our redesign services.', img: roomRedesign },
  ];

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
            layout="fill"
          />
          <div className="absolute top-1/2 left-8 transform -translate-y-1/4 max-w-2xl w-full backdrop-blur-sm bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
              Welcome to Zafari CC Design
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Zafari CC Design is a custom carpentry and interior design company built on craftsmanship,
              creativity, and a love for detail. We take pride in creating spaces that feel personal,
              functional, and beautifully designed.
            </p>
          </div>
        </div>

        {/* Services Section */}
        {/* Services Section */}

        <div className={styles.services}>
      {services.map((service, index) => (
        <div key={index} className={styles.perspective}>
          <div className={styles.card}>
            {/* Front Face */}
            <div 
              className={`${styles.cardFace} ${styles.cardFront}`} 
              style={{ backgroundImage: `url(${service.img})`, backgroundSize: 'cover' }}
            >
              <div className={styles.cardTitle}>{service.title}</div>
              <div className={styles.cardDescription}>{service.description}</div>
            </div>

            {/* Back Face */}
            <div className={`${styles.cardFace} ${styles.cardBack}`} >
              <Image
                src={service.img}
                alt="Service"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

        {/* Why Choose Us Section */}
       {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
          <div className={styles.overlay}>
            <h2 className={styles.heading}>Why Choose Us?</h2>
            <p className={styles.description}>
              Our projects are a collaboration between our craftsmanship and your vision. We listen closely
              to our clients, ensuring each space is crafted with care and precision, resulting in both
              functional and beautiful environments.
            </p>
          </div>
        </section>


       {/* Contact Us Section */}
        <section className={styles.contactUs}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.description}>
              Have a project in mind? Reach out to us to discuss your ideas and get a personalized quote.
            </p>
            <a href="/contact" className={styles.link}>Get in Touch</a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

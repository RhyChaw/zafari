'use client';
import React, { useEffect, useState } from 'react';
import Footer from './footer/page';
import Navbar from './navbar/page';
import Image from 'next/image';
import supabase from '../utils/supabaseClient';  // adjust path
import landingIMG from '../images/8.jpeg';
import customCarpentry from '../images/10.jpeg';
import interiorDesign from '../images/6.jpeg';
import furnitureDesign from '../images/11.jpeg';
import roomRedesign from '../images/13.jpeg';
import styles from './flipcard.module.css';
import { useLogo } from '@/contexts/LogoContext';

export default function Home() {
  const [pageContent, setPageContent] = useState({});
  const [loading, setLoading] = useState(true);
  const { imageUrl, setImageUrl } = useLogo();

  const services = [
    { title: 'Custom Carpentry', description: 'Tailored solutions to meet your unique needs.', img: customCarpentry },
    { title: 'Interior Design', description: 'Creative designs to transform your space.', img: interiorDesign },
    { title: 'Furniture Design', description: 'Custom furniture that adds style to your home.', img: furnitureDesign },
    { title: 'Room Redesign', description: 'Reimagine your space with our redesign services.', img: roomRedesign },
  ];

  useEffect(() => {
    const fetchPageContent = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('page_content')
        .select('key, content');

      if (error) {
        console.error('Error fetching page content:', error);
      } else {
        // convert array [{key, content}, ...] to { key: content, ... }
        const contentObj = {};
        data.forEach(({ key, content }) => {
          contentObj[key] = content;
        });
        setPageContent(contentObj);
      }
      setLoading(false);
    };

    fetchPageContent();
  }, []);

  if (loading) return <p className="p-8 text-center">Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">
      <Navbar imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <main className="flex-1">
        {/* Landing Section */}
        <div className="relative h-screen">
          <Image
            src={landingIMG}
            alt="Landing"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-8 transform -translate-y-1/4 max-w-2xl w-full backdrop-blur-sm bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
              {pageContent.big_title || 'Loading...'}
            </h1>
            <p className="text-xl text-white leading-relaxed">
              {pageContent.below_big_title || 'Loading...'}
            </p>
          </div>
        </div>

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
                <div className={`${styles.cardFace} ${styles.cardBack}`}>
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
        <section className={styles.whyChooseUs}>
          <div className={styles.overlay}>
            <h2 className={styles.heading}>
              {pageContent.question_why_choose_us || 'Loading...'}
            </h2>
            <p className={styles.description}>
              {pageContent.why_choose_us_text || 'Loading...'}
            </p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className={styles.contactUs}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>
              {pageContent.contact_title || 'Loading...'}
            </h2>
            <p className={styles.description}>
              {pageContent.contact_text || 'Loading...'}
            </p>
            <a href="/contact" className={styles.link}>
              {pageContent.contact_button_text || 'Loading...'}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

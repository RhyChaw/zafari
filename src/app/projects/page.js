'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import styles from './Projects.module.css'; // Import CSS module for styling

import IMG1 from '../../images/1.jpeg';
import IMG2 from '../../images/2.jpeg';
import IMG3 from '../../images/3.jpeg';
import IMG4 from '../../images/4.jpeg';
import IMG5 from '../../images/5.jpeg';
import IMG6 from '../../images/6.jpeg';
import IMG7 from '../../images/7.jpeg'; 
import IMG8 from '../../images/8.jpeg';
import IMG9 from '../../images/9.jpeg';
import IMG10 from '../../images/10.jpeg';
import IMG11 from '../../images/11.jpeg';
import IMG12 from '../../images/12.jpeg';
import IMG13 from '../../images/13.jpeg';
import IMG14 from '../../images/14.jpeg';

export default function Projects() {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14];

  return (
    <>
      <Navbar />
      <div className={styles.galleryContainer}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image src={img} alt={`Project ${index + 1}`} layout="intrinsic" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

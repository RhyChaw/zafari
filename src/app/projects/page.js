'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import styles from './Projects.module.css';
import supabase from '../../utils/supabaseClient';

export default function Projects() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
  const fetchImages = async () => {
    console.log("Listing files in 'uploads' folder inside 'projects' bucket...");

    const listUploads = await supabase.storage.from('projects').list('uploads', { limit: 100 });
    console.log('Uploads folder files:', listUploads.data);

    if (!listUploads.data || listUploads.data.length === 0) {
      console.log('No files found in uploads folder.');
      return;
    }

    const files = listUploads.data;

    console.log('Files found:', files);

    const urls = files
      .filter((file) => file.name.match(/\.(jpeg|jpg|png|webp)$/i))
      .map((file) => {
        const { data: { publicUrl } } = supabase.storage
          .from('projects')
          .getPublicUrl(`uploads/${file.name}`);
        return publicUrl;
      });

    console.log('Public URLs:', urls);
    setImageUrls(urls);
  };

  fetchImages();
}, []);



  return (
    <>
      <Navbar />
      <div className={styles.galleryContainer}>
        {imageUrls.length === 0 && <p style={{ color: '#ccc', textAlign: 'center' }}>Loading images or no images found...</p>}
        {imageUrls.map((url, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={url}
              alt={`Project ${index + 1}`}
              width={400}
              height={300}
              style={{ borderRadius: '8px', objectFit: 'cover' }}
              priority={index < 3} // preloads first 3 images for better UX
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

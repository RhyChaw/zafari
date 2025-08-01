'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import styles from './Projects.module.css';
import supabase from '../../utils/supabaseClient';

export default function Projects() {
  const [imageUrls, setImageUrls] = useState([]);
  const [beforeAfterPairs, setBeforeAfterPairs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listUploads = await supabase.storage.from('projects').list('uploads', { limit: 100 });
      if (!listUploads.data || listUploads.data.length === 0) return;

      const files = listUploads.data;

      const urls = files
        .filter((file) => file.name.match(/\.(jpeg|jpg|png|webp)$/i))
        .map((file) => {
          const { data: { publicUrl } } = supabase.storage
            .from('projects')
            .getPublicUrl(`uploads/${file.name}`);
          return publicUrl;
        });

      setImageUrls(urls);
    };

    const fetchBeforeAfter = async () => {
      const { data, error } = await supabase.from('before_after_pairs').select('*').order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching before-after pairs:', error.message);
      } else {
        setBeforeAfterPairs(data);
      }
    };

    fetchImages();
    fetchBeforeAfter();
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Gallery */}
      <div className={styles.galleryContainer}>
        {imageUrls.length === 0 && (
          <p style={{ color: '#ccc', textAlign: 'center' }}>
            Loading images or no images found...
          </p>
        )}
        {imageUrls.map((url, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={url}
              alt={`Project ${index + 1}`}
              width={400}
              height={300}
              style={{ borderRadius: '8px', objectFit: 'cover' }}
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      {/* Before and After Section */}
      <div>
        <h2 className={styles.heading}>Before and After</h2>
        <div className={styles.beforeAfterContainer}>
          {beforeAfterPairs.length === 0 && (
            <p style={{ color: '#aaa', textAlign: 'center' }}>
              No before-and-after pairs uploaded yet.
            </p>
          )}

          {beforeAfterPairs.map((pair) => (
            <div key={pair.id} className={styles.beforeAfterPair}>
              <div>
                <h4 className={styles.label}>Before</h4>
                <Image
                  src={pair.before_image_url}
                  alt="Before"
                  width={300}
                  height={200}
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className={styles.label}>After</h4>
                <Image
                  src={pair.after_image_url}
                  alt="After"
                  width={300}
                  height={200}
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

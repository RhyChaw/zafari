'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { supabase } from '../../utils/supabaseClient';

export default function Projects() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        // Fetch images from the Supabase storage bucket
        const { data, error } = await supabase
          .storage
          .from('projects') // Your bucket name
          .list(''); // List all files (no folder, just the images directly in the bucket)

        console.log('Supabase response:', data); // Log the response for debugging

        if (error) {
          console.error('Error fetching images:', error.message);
          throw error; // Throw error if fetching fails
        }

        if (data.length === 0) {
          setError('No images available. Please check back later.');
        } else {
          setImages(data); // Set fetched images into state
        }

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError('Failed to fetch images. Please try again later.');
        setLoading(false); // Set loading to false even if there is an error
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      This is the Projects page.
      <Footer />
    </>
  );
}

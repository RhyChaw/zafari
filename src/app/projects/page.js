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
      <div className="min-h-screen bg-white text-gray-900">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] py-8">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl font-medium">Explore the craftsmanship and creativity behind each of our unique projects.</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto py-12 px-6">
          {/* Loading State */}
          {loading && <p className="text-center text-xl text-gray-600">Loading images...</p>}

          {/* Error State */}
          {error && <p className="text-center text-xl text-red-600">{error}</p>}

          {/* Gallery Grid */}
          {!loading && !error && images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => {
                // Log the URL to ensure it's being constructed correctly
                const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${image.name}`;
                console.log('Image URL:', imageUrl); // Log image URLs to verify correctness
                return (
                  <div key={index} className="relative">
                    <Image
                      src={imageUrl}
                      alt={`Project Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                      <p>Project Image {index + 1}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* If no images are available */}
          {!loading && !error && images.length === 0 && (
            <p className="text-center text-xl text-gray-600">No images available. Please check back later.</p>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#6a4e23] text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-6">We specialize in custom carpentry and interior design that brings your vision to life.</p>
            <a
              href="/contact"
              className="bg-[#9e7a3f] text-white py-3 px-6 rounded-md text-xl hover:bg-[#6a4e23]"
            >
              Get in Touch with Us
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import supabase from '../../../utils/supabaseClient';

export default function AdminHome() {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('homepage_content')
        .select('*')
        .eq('id', 1)
        .single();

      if (data) {
        setHeroHeading(data.hero_heading);
        setHeroDescription(data.hero_description);
      }
      if (error) console.error(error);
      setLoading(false);
    };

    fetchContent();
  }, []);

  const handleSave = async () => {
    const { error } = await supabase
      .from('homepage_content')
      .update({
        hero_heading: heroHeading,
        hero_description: heroDescription
      })
      .eq('id', 1);

    if (error) alert('Error updating content');
    else alert('Content saved successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Admin: Edit Landing Page</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <label className="w-full max-w-3xl mb-4">
            <p className="mb-2 font-medium">Hero Heading</p>
            <input
              value={heroHeading}
              onChange={(e) => setHeroHeading(e.target.value)}
              className="w-full p-2 text-black rounded"
            />
          </label>

          <label className="w-full max-w-3xl mb-4">
            <p className="mb-2 font-medium">Hero Description</p>
            <textarea
              value={heroDescription}
              onChange={(e) => setHeroDescription(e.target.value)}
              className="w-full p-3 text-black rounded"
              rows={5}
            />
          </label>

          <button
            onClick={handleSave}
            className="mt-4 px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
          >
            Save Changes
          </button>
        </>
      )}
    </div>
  );
}

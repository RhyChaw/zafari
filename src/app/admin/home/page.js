'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/app/navbar/page';
import supabase from '../../../utils/supabaseClient';

export default function AdminHome() {
  const [content, setContent] = useState({
    hero_heading: '',
    hero_description: '',
    question: '',
    why_choose_us_text: '',
    contact_heading: '',
    contact_text: '',
    contact_link_text: '',
  });
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
  const fetchContent = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('page_content').select('key, content');
    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    // Convert array of {key, content} into object { key: content, ... }
    const contentObj = {};
    data.forEach(({ key, content }) => {
      contentObj[key] = content;
    });

    setContent(contentObj);
    setLoading(false);
  };

  fetchContent();
}, []);

  const handleChange = (field, value) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
  setLoading(true);

  try {
    for (const [key, value] of Object.entries(content)) {
      const { error } = await supabase
        .from('page_content')
        .update({ content: value })
        .eq('key', key);

      if (error) {
        throw error;
      }
    }
    alert('Content saved successfully!');
    setIframeKey((prev) => prev + 1); // reload iframe
  } catch (error) {
    alert('Error saving content');
    console.error(error);
  }

  setLoading(false);
};


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-8 flex flex-col items-center space-y-12">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg animate-fadeIn">
          Admin: Edit Landing Page
        </h1>

        {/* Preview Section */}
        <div className="w-full max-w-7xl bg-gradient-to-tr from-black/60 to-gray-900 rounded-xl shadow-2xl p-6 ring-1 ring-purple-700 animate-slideUp">
          <h2 className="text-3xl font-semibold mb-4 border-b border-purple-600 pb-3 select-none">
            Live Preview
          </h2>
          <iframe
            key={iframeKey}
            src="/"
            title="Landing Page Preview"
            className="w-full h-[500px] rounded-lg border border-purple-700 shadow-lg hover:shadow-purple-900 transition-shadow duration-500"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>

        {/* Editor Section */}
        <div className="w-full max-w-4xl bg-gradient-to-tr from-white-800 to-white-900 rounded-2xl shadow-xl p-8 space-y-8 animate-slideUp delay-100">
          {loading ? (
            <p className="text-center text-purple-300 text-lg font-medium">Loading content...</p>
          ) : (
            <>
              {Object.entries(content).map(([key, value]) => {
                // Create readable labels from keys
                const label = key
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (c) => c.toUpperCase());

                const isTextarea = key.includes('description') || key.includes('text');

                return (
                  <label key={key} className="block">
                    <span className="block mb-2 font-semibold text-purple-300 select-none">
                      {label}
                    </span>
                    {isTextarea ? (
                      <textarea
                        value={value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        rows={key === 'hero_description' ? 5 : 3}
                        placeholder={`Enter ${label.toLowerCase()}`}
                        className="w-full rounded-lg p-4 text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 resize-y shadow-md hover:shadow-purple-500"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        placeholder={`Enter ${label.toLowerCase()}`}
                        className="w-full rounded-lg p-4 text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 shadow-md hover:shadow-purple-500"
                      />
                    )}
                  </label>
                );
              })}

              <button
                onClick={handleSave}
                className="w-full py-4 mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl font-extrabold text-white shadow-lg hover:scale-105 hover:shadow-pink-700 active:scale-95 transition transform duration-300"
                aria-label="Save Changes"
              >
                Save Changes
              </button>
            </>
          )}
        </div>

        {/* Custom animations via Tailwind's @keyframes can be added in your global CSS or Tailwind config */}
        <style jsx global>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.5s ease forwards;
          }
        `}</style>
      </div>
    </>
  );
}

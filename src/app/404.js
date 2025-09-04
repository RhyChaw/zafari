"use client";

import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] min-h-screen flex items-center justify-center text-center text-white px-4 py-8">
      <div className="max-w-lg w-full">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6">404</h1>
        <p className="text-2xl sm:text-3xl mb-6">Oops! The page you are looking for does not exist.</p>
        <p className="text-lg sm:text-xl mb-8">It seems you've stumbled upon a missing page.</p>

        {/* Button to redirect to home */}
        <button
          onClick={handleRedirect}
          className="bg-[#d1b28d] text-[#6a4e23] hover:bg-[#bda94e] font-semibold py-2 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

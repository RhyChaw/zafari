// pages/index.js
import Footer from './footer/page';
import Navbar from './navbar/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 p-10">
        <h1 className="text-4xl font-bold mb-4">
          Zafari CC Design <span className="text-sm align-top">LLC</span>
        </h1>
        <p className="max-w-2xl">
          Zafari CC Design is a custom carpentry and interior design company built on craftsmanship,
          creativity, and a love for detail. We take pride in creating spaces that feel personal,
          functional, and beautifully designed.
        </p>
      </main>
      <Footer />
    </div>
  );
}

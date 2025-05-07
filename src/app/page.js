// pages/index.js
import Footer from './footer/page';
import Navbar from './navbar/page';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-1 p-4 md:p-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Zafari CC Design <span className="text-sm align-top">LLC</span>
          </h1>
          <p className="max-w-xl mx-auto mb-4">
            Zafari CC Design is a custom carpentry and interior design company built on craftsmanship,
            creativity, and a love for detail. We take pride in creating spaces that feel personal,
            functional, and beautifully designed.
          </p>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-5">
            <li>Custom Carpentry Projects</li>
            <li>Interior Design Solutions</li>
            <li>Personalized Furniture Design</li>
            <li>Room Redesign and Remodeling</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="max-w-xl mx-auto">
            Our projects are a collaboration between our craftsmanship and your vision. We listen closely
            to our clients, ensuring each space is crafted with care and precision, resulting in both
            functional and beautiful environments.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>Have a project in mind? Reach out to us to discuss your ideas and get a personalized quote.</p>
          <a href="#" className="text-blue-600 underline">Get in Touch</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

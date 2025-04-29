import Image from 'next/image';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function Projects() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="relative">
              <Image
                src="/path-to-image1.jpg"
                alt="Custom kitchen design"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                <p>Custom Kitchen Design</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative">
              <Image
                src="/path-to-image2.jpg"
                alt="Luxury living room design"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                <p>Luxury Living Room Design</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative">
              <Image
                src="/path-to-image3.jpg"
                alt="Entertainment center installation"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                <p>Entertainment Center Installation</p>
              </div>
            </div>

            {/* More gallery items can go here... */}
          </div>
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

'use client';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { useState } from 'react';
import Image from 'next/image';
import contactImg from '../../images/bnw.jpg'; // Use a relevant image for the contact section

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !message) {
      setStatus('Please fill in both fields.');
      return;
    }

    try {
      // Send the email and message to a backend or an email API
      // Example: await sendEmailToBackend(email, message);
      
      setStatus('Your message has been sent successfully!');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f]">
          <Image
            src={contactImg}
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-50"
          />
          <div className="relative z-10 container mx-auto text-center text-white py-16 px-6">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl font-medium">We're here to help and answer any questions you may have. Reach out to us below!</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto bg-gray-100 p-10 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a4e23]"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a4e23]"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-[#6a4e23] text-white font-semibold rounded-md hover:bg-[#9e7a3f]"
                >
                  Send Message
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`mt-4 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

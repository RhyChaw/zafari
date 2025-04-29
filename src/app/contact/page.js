'use client';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { useState } from 'react';

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
        <section className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] py-8">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl font-medium">We would love to hear from you. Please fill out the form below to send us a message.</p>
          </div>
        </section>

        <section className="container mx-auto py-12 px-6">
          <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a4e23]"
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
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a4e23]"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-[#6a4e23] text-white font-semibold rounded-md hover:bg-[#9e7a3f]"
                >
                  Send Message
                </button>
              </div>

              {status && (
                <div className={`mt-4 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

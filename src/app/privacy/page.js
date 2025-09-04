"use client";

import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { useLogo } from '@/contexts/LogoContext';

export default function PrivacyPolicy() {
  const { imageUrl, setImageUrl } = useLogo();
  return (
    <>
      <Navbar imageUrl={imageUrl} setImageUrl={setImageUrl}/>

      <div className="bg-[#f9f9f9] text-[#333] py-10 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-6 text-lg sm:text-xl">Last updated: {new Date().getFullYear()}</p>
          
          <div className="text-lg sm:text-xl text-left space-y-6">
            <h2 className="font-semibold">1. Introduction</h2>
            <p>At Zafari CC Design LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our views and practices regarding your personal data.</p>

            <h2 className="font-semibold">2. Information We Collect</h2>
            <p>We may collect personal data from you when you interact with us, such as when you contact us, request services, or provide us with feedback. This may include:</p>
            <ul className="list-disc ml-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information (when applicable)</li>
              <li>Usage data from our website</li>
            </ul>

            <h2 className="font-semibold">3. How We Use Your Information</h2>
            <p>We may use the information we collect from you in the following ways:</p>
            <ul className="list-disc ml-5">
              <li>To provide and improve our services</li>
              <li>To process transactions and communicate with you</li>
              <li>To send marketing communications and updates about our services</li>
              <li>To respond to inquiries or feedback</li>
              <li>To ensure compliance with legal obligations</li>
            </ul>

            <h2 className="font-semibold">4. How We Protect Your Information</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. These include encryption and secure server technology. We use appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="font-semibold">5. Data Retention</h2>
            <p>We will retain your personal information for as long as needed to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

            <h2 className="font-semibold">6. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following circumstances:</p>
            <ul className="list-disc ml-5">
              <li>With third-party service providers who assist us in operating our business, such as payment processors or email marketing services (who are required to keep your data confidential)</li>
              <li>If required by law or to comply with legal processes (e.g., subpoenas, court orders)</li>
              <li>To protect our rights, property, or safety, and the rights, property, or safety of others</li>
            </ul>

            <h2 className="font-semibold">7. Cookies and Tracking Technologies</h2>
            <p>We may use cookies, web beacons, and other tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us analyze web traffic and improve your browsing experience. You can control the use of cookies through your browser settings, but disabling cookies may affect certain features of our website.</p>

            <h2 className="font-semibold">8. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc ml-5">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to correct any inaccurate or incomplete information</li>
              <li>The right to request the deletion of your personal data</li>
              <li>The right to object to or restrict the processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>
            <p>If you wish to exercise any of these rights, please contact us at <a href="mailto:zafaricdesignllc@gmail.com" className="text-[#d1b28d]">zafaricdesignllc@gmail.com</a>.</p>

            <h2 className="font-semibold">9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to read their privacy policies before submitting any personal information to them.</p>

            <h2 className="font-semibold">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page with an updated "Last updated" date.</p>

            <h2 className="font-semibold">11. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>
            <p>Email: <a href="mailto:zafaricdesignllc@gmail.com" className="text-[#d1b28d]">zafaricdesignllc@gmail.com</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

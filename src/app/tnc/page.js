import Footer from "../footer/page";
import Navbar from "../navbar/page";

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f9f9f9] text-[#333] py-10 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="mb-6 text-lg sm:text-xl">Last updated: {new Date().getFullYear()}</p>
          
          <div className="text-lg sm:text-xl text-left space-y-6">
            <h2 className="font-semibold">1. Introduction</h2>
            <p>These Terms & Conditions govern your use of the services provided by Zafari CC Design LLC. By accessing or using our website and services, you agree to comply with these terms. If you do not agree with any part of these terms, you must not use our services.</p>
  
            <h2 className="font-semibold">2. Services</h2>
            <p>Zafari CC Design offers custom carpentry and interior design services. Our services are tailored to each project, and you are responsible for providing accurate information and materials necessary for us to complete the work.</p>
            <p>We reserve the right to refuse service if we determine that the work required is outside the scope of what we can provide or violates our policies.</p>

            <h2 className="font-semibold">3. Payments</h2>
            <p>Payments for services are due in accordance with the terms set out in the individual agreement between you and Zafari CC Design. Payment may be required upfront or in installments based on the project. Late payments may incur additional charges as outlined in the agreement.</p>
            <p>We accept payments via credit card, bank transfer, and other methods as agreed upon.</p>

            <h2 className="font-semibold">4. Limitation of Liability</h2>
            <p>Zafari CC Design LLC will not be held liable for any damages, loss of income, or other damages arising from the use or inability to use our services, except in cases where damages arise from gross negligence or willful misconduct.</p>
            <p>Our liability is limited to the value of the services provided under the agreement, and we are not liable for any indirect, incidental, or consequential damages.</p>
  
            <h2 className="font-semibold">5. Changes to Terms</h2>
            <p>Zafari CC Design reserves the right to modify or update these Terms & Conditions at any time. Changes will be posted on this page, and you are encouraged to review this page regularly for updates. By continuing to use our services after changes are made, you agree to be bound by the updated terms.</p>

            <h2 className="font-semibold">6. Cancellation and Termination</h2>
            <p>You may cancel or terminate a project with us at any time by providing notice to us. However, you may be responsible for any outstanding balances for work completed up until the point of cancellation.</p>
            <p>Zafari CC Design also reserves the right to cancel or suspend services if there are violations of these Terms & Conditions or if we are unable to perform due to unforeseen circumstances.</p>

            <h2 className="font-semibold">7. Intellectual Property</h2>
            <p>All designs, materials, and intellectual property produced by Zafari CC Design are the sole property of Zafari CC Design LLC unless otherwise agreed upon in writing. You may not use, reproduce, or distribute any of our intellectual property without prior written consent.</p>

            <h2 className="font-semibold">8. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Zafari CC Design LLC, its officers, employees, and agents, from any claims, damages, or expenses arising out of your use of our services, including any violations of these terms or third-party rights.</p>

            <h2 className="font-semibold">9. Privacy Policy</h2>
            <p>By using our services, you agree to the terms outlined in our <a href="/privacy-policy" className="text-[#d1b28d]">Privacy Policy</a>. The Privacy Policy explains how we collect, use, and protect your personal data.</p>

            <h2 className="font-semibold">10. Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of the jurisdiction in which Zafari CC Design LLC operates. Any disputes will be resolved in the courts of that jurisdiction.</p>

            <h2 className="font-semibold">11. Dispute Resolution</h2>
            <p>Any disputes arising from these Terms & Conditions or the use of our services will be resolved through binding arbitration or mediation, rather than through litigation, in accordance with the laws governing our jurisdiction.</p>

            <h2 className="font-semibold">12. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms & Conditions, or if you need assistance with any part of our services, please contact us at:</p>
            <p>Email: <a href="mailto:zafaricdesignllc@gmail.com" className="text-[#d1b28d]">zafaricdesignllc@gmail.com</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

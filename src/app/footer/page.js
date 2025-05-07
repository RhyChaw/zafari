import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Add icon library

export default function Footer() {
  return (
    <footer className="bg-[#3c2f28] text-white py-10">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Zafari CC Design LLC</h3>
        <p className="mb-6 text-lg sm:text-xl">Your dream space, beautifully crafted with care and precision.</p>
        
        {/* Contact info */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 mb-6">
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-2">Contact AD Zafari</h4>
            <p>📞 +1 585 698 5048</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-2">Contact Amir Zafari</h4>
            <p>📞 +1 585 362 0801</p>
          </div>
        </div>
  
        {/* Email link */}
        <div className="mb-4">
          <p className="text-lg sm:text-xl">Email: 
            <a href="mailto:zafaricdesignllc@gmail.com" className="text-[#d1b28d] hover:text-white"> zafaricdesignllc@gmail.com</a>
          </p>
        </div>
  
        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-6 mb-6">
          <a href="#" className="text-[#d1b28d] hover:text-white">
            <FaFacebookF className="text-2xl sm:text-3xl" />
          </a>
          <a href="#" className="text-[#d1b28d] hover:text-white">
            <FaInstagram className="text-2xl sm:text-3xl" />
          </a>
          <a href="#" className="text-[#d1b28d] hover:text-white">
            <FaLinkedinIn className="text-2xl sm:text-3xl" />
          </a>
        </div>

        {/* Additional Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="/privacy" className="text-[#d1b28d] hover:text-white">Privacy Policy</a>
          <a href="/tnc" className="text-[#d1b28d] hover:text-white">Terms & Conditions</a>
        </div>

        <div className="text-sm sm:text-base mb-6">
          This site was created by <a href="https://www.linkedin.com/in/rhychaw/" className="text-[#d1b28d] hover:text-white">Rhythm Chawla</a>
        </div>
  
        {/* Copyright */}
        <p className="mt-8 text-sm sm:text-base">&copy; {new Date().getFullYear()} Zafari CC Design LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}



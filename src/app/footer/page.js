export default function Footer() {
    return (
      <footer className="bg-[#3c2f28] text-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Zafari CC Design LLC</h3>
          <p className="mb-6 text-lg">Your dream space, beautifully crafted with care and precision.</p>
          
          <div className="flex justify-center gap-10 mb-6">
            <div>
              <h4 className="font-semibold text-lg">Contact AD Zafari</h4>
              <p>📞 +1 585 698 5048</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Contact Amir Zafari</h4>
              <p>📞 +1 585 362 0801</p>
            </div>
          </div>
  
          <div className="mb-4">
            <p className="text-lg">Email: <a href="mailto:zafaricdesignllc@gmail.com" className="text-[#d1b28d]">zafaricdesignllc@gmail.com</a></p>
          </div>
  
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-[#d1b28d] hover:text-white">Facebook</a>
            <a href="#" className="text-[#d1b28d] hover:text-white">Instagram</a>
            <a href="#" className="text-[#d1b28d] hover:text-white">LinkedIn</a>
          </div>

          <div>This site was created by Rhychaw </div>
  
          <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} Zafari CC Design LLC. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
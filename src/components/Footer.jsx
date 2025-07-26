import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className="relative bg-[#C4D9FF] text-gray-700 pt-60 pb-8 mt-1 overflow-hidden font-[Poppins]">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 200" className="w-full h-[200px] hidden sm:block" preserveAspectRatio="none">
          <path fill="white" d="M0,200 L950, 120 L1440,200 L1440,0 L0,0 Z" />
          <path d="M0,200 L950,120 L1440,200" stroke="#C5D8FF" strokeWidth="15" fill="none" style={{ transform: "translateY(-10px)" }} />
        </svg>
        <svg viewBox="0 0 1440 200" className="w-full h-[200px] block sm:hidden" preserveAspectRatio="none">
          <path fill="white" d="M0,200 L1000,170 L1440,200 L1440,0 L0,0 Z" />
          <path d="M0,200 L1000,170 L1440,200" stroke="#C5D8FF" strokeWidth="15" fill="none" style={{ transform: "translateY(-10px)" }} />
        </svg>
      </div>
 
      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <Link href="/">
              <Image src="/logo_footer.png" alt="PropertyBecho Logo" width={500} height={60} />
            </Link>
            <p className="mt-4 text-[16px] text-[#666666] max-w-4xl">
              Molestiae quaerat iste quia qui doloribus. Doloremque est at. Accusantium incidunt rerum soluta. Rerum <br />
              fugiat ullam tenetur. Magnam eaque repudiandae aut fugit voluptas sint dolor soluta.
            </p>
            <div className="flex space-x-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-[50px] h-[50px] bg-[#C4D9FF] text-[#12182899] rounded-full flex items-center justify-center shadow-md hover:bg-[#2450A0] hover:text-white transition-colors border-4 border-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
 
          {/* Links */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-extrabold text-[15px] text-[#121828]">Useful Links</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-[#555555]">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Buy</a></li>
                  <li><a href="#">Sell</a></li>
                  <li><a href="#">Customer Support</a></li>
                </ul>
              </div>
             <div className="text-center md:text-left">
  <h3 className="font-extrabold text-[15px] text-[#121828]">Other</h3>
  <ul className="mt-4 space-y-2 text-[14px] text-[#555555]">
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms of Service</a></li>
  </ul>
</div>
            </div>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <hr className="border-t border-[#BCBAD2] mt-12 mb-6" />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mt-4 md:mt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>© 2025 Propertybecho</p>
          <a
            href="#"
            className="text-[#555555] text-[16px] flex items-center gap-2 transition-all duration-200 hover:text-black"
          >
            <img src="coolicon.png" alt="Up arrow" className="h-4 w-auto" style={{ fontFamily: 'Poppins, sans-serif' }} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
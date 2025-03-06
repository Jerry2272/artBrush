import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import LogoUngroup2 from "@assets/assets/footer-logo.png"; // Ensure this is correctly located

export const Footer = () => {
  return (
    <footer className=" text-white md:p-24 p-12 text-left" 
    style={{
        background: 'rgba(17, 17, 17, 1)'
    }}
    >
      {/* Footer Content */}
      <div className="flex justify-center items-start md:gap-24 gap-12 flex-wrap lg:mb-[3em]">
        {/* Logo */}
        <div className="logo flex items-center pt-[2em]">
          <Image src={LogoUngroup2} alt="Art Logo text"  />
        </div>

        {/* Navigation Sections */}
        <div className="explore">
          <h5 className="text-lg font-semibold mb-3" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '700'}} > Explore</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Collection</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Exhibition</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Artists</span></Link></li>
          </ul>
        </div>

        <div className="community md:text-start text-end">
          <h5 className="text-lg font-semibold mb-3" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '700'}}>Community</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className=" transition; text-[rgba(233, 233, 219, 1)]" style={{color: 'rgba(233, 233, 219, 1)'}}>Community Control</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Support</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Help</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>My Info</span></Link></li>
          </ul>
        </div>

        <div className="company">
          <h5 className="text-lg font-semibold mb-3" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '700'}}>Company</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>About Us</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Partners</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Customers</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>Contact Us</span></Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="flex justify-between items-center flex-col lg:flex-row p-10 gap-2 md:px-[5em] ">
        <p className="text-white/60 text-center">© 2024 Art Gallery. All rights reserved.</p>
        <ul className="flex gap-5 text-2xl">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition" style={{color: 'rgba(233, 233, 219, 1)', fontWeight: '500'}}>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

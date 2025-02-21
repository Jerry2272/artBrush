import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import LogoUngroup2 from "@assets/assets/logo-under.png"; // Ensure this is correctly located

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
          <h5 className="text-lg font-semibold mb-3">Explore</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className="hover:text-white transition">Collection</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Exhibition</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Artists</span></Link></li>
          </ul>
        </div>

        <div className="community md:text-start text-end">
          <h5 className="text-lg font-semibold mb-3">Community</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className="hover:text-white transition">Community Control</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Support</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Help</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">My Info</span></Link></li>
          </ul>
        </div>

        <div className="company">
          <h5 className="text-lg font-semibold mb-3">Company</h5>
          <ul className="text-white/70 space-y-2">
            <li><Link href="#"><span className="hover:text-white transition">About Us</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Partners</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Customers</span></Link></li>
            <li><Link href="#"><span className="hover:text-white transition">Contact Us</span></Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="flex justify-between items-center flex-col lg:flex-row p-10 gap-8 ">
        <p className="text-white/60 text-center">© 2024 Art Gallery. All rights reserved.</p>
        <ul className="flex gap-5 text-2xl">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

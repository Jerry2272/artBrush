import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="lg:hidden block z-50 relative text-white">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} className="text-black" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[60vh] bg-black flex flex-col items-center justify-center gap-6 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <ul className="text-white text-lg space-y-[40px]">
          <li className="list-none">
            <a href="/" className="hover:text-gray-400 transition duration-300">
              Home
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Gallery
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Collections
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Exhibition
            </a>
          </li>
        </ul>

        <button
          className="rounded-[10px] text-white py-3 px-8 bg-gray-800 hover:bg-gray-700 transition duration-300"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

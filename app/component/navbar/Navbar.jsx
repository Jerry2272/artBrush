"use client";
import Image from 'next/image';
import Logo from  '@assets/assets/logo.png'
import { MobileView } from './MobileView';


const Navbar = () => {

  return (
    <navbar  className="navbar container-fluid flex lg:px-14 px-5 py-2 justify-between items-center bg-white text-black w-full "
    >
      <a href="#">
     <Image src={Logo} width={135} alt="brushArt Logo"  className='mobileViewLogo' />
      </a>
      < ul className='md:flex gap-10 m-0 p-0 justify-end items-center hidden ml-auto' >
        <li className='list-none'>
          <a href="/"
          style={
            {border:  '2px solid rgba(26, 26, 26, 1)', borderRadius: '8px'}
          }
            className='font-normal text-'>
            Home
          </a>
        </li>
        <a href="#"
          className='font-normal'>
         Gallery
        </a>
        <li className='list-none'>
          <a href="#"
            className='font-normal'>
            Collections
          </a>
        </li>
        <li className='list-none'>
          <a href="#"
            className='font-normal'
  
          >
            Exhibition
          </a>
        </li>
    
        <button className="rounded-[10px] text-white py-4 px-10"
        style={{
          background: "rgba(26, 26, 26, 1)"
        }}
   
        >Contact</button>
      </ul>
      <MobileView />

    </navbar>
  );
}

export default Navbar;

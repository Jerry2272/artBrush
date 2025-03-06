"use client";
import Image from 'next/image';
import Logo from  '@assets/assets/l.png'
import { MobileView } from './MobileView';


const Navbar = () => {

  return (
    <navbar  className="navbar container-fluid flex lg:px-14 px-5 py-2 justify-between items-center bg-white text-black w-full md:mt-[2em]  "
    >
      <a href="#">
     <Image src={Logo} width={135} alt="brushArt Logo"  className='mobileViewLogo' />
      </a>
      < ul className='md:flex gap-10 m-0 p-0 justify-end items-center hidden ml-auto' >
        <li className='list-none'>
          <a href="/"
          style={
            {border:  '2px solid rgba(26, 26, 26, 1)', borderRadius: '8px' , color: 'rgba(26, 26, 26, 1)'}
          }
            className='font-normal'>
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
    
        <button className=" text-white py-2 px-10 md:p-[9px] md:w-[135px] md:h-[53px] gap-[9.53px];
;"
        style={{
          background: "rgba(26, 26, 26, 1)",
          borderRadius: '9.53px'
        }}
   
        >Contact</button>
      </ul>
      <MobileView />
    </navbar>
  );
}

export default Navbar;

'use client'
import { useState, useEffect } from 'react';
// import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import React from 'react'
import Angle from '@assets/assets/arrow-angle.png'
import Slide1 from '@assets/assets/artSlider1.png'
import Slide2 from '@assets/assets/artSlider2.png'
import Slide3 from '@assets/assets/artSlide2.png'
import Img2 from '@assets/assets/hero-gallery1.png'
import Img3 from '@assets/assets/hero-gallery2.png'
import Arrow from '@assets/assets/arrow.png'


const images = [Slide1 , Slide2 , Slide3];


export const Hero = () => {
  const [indexImg , setIndex] = useState(0);


useEffect(() => {
const interval = setInterval(() => {
 setIndex((prevIndex) => (prevIndex + 1) % images.length);
}, 3000);
return() => clearInterval(interval)

}, [])
;
  return (
    <>
    < section className="hero md:p-[4em] pb-0 mb-0 p-8 md:mx-[16px] ">
      <div className="heroHeadline lg:flex justify-between items-center md:mb-[75px]">
        <h1>Journey Through Art. </h1>
        <p className='pt-10 lg:pt-0'>
          Explore the unique creations of our talented <br className='hidden lg:block' />
          artisans explore the unique creations
        </p>
      </div>
      <div className="heroImage grid md:grid-cols-2 lg:my-[10px] my-5 gap-[15px] h-[60%]">
        <div className="imgItem relative md:row-span-2">
        <div
      className="absolute right-0 h-[117px] w-[107px] flex items-center justify-center top-[-8px]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)", // Triangle shape
        background: "rgba(131, 131, 131, 1)",
        borderRadius: "15px", // Softens edges
        transform: 'rotate(92deg)',
      }}
    >
      <Image  className="text-white "
      src={Angle}
      alt='Image Arrow'

      
      style={{
        top: "80%", 
        left: "60%", 
        transform: "translate(-60%, -70%) rotate(-91deg)", // Counter the div rotation
      }}
       /> {/* Arrow icon */}
    </div>
          <Image
            className=''
            src={images[indexImg]}
            alt="Collection Image"
          />
              <div className='w-full absolute inset-0 flex flex-col justify-end p-4 bottom-0' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                }}
                >
                  <h1 className=" butt md:ml-[20px]">Collection!</h1>
              <h5 className="font-bold text-white mt-auto md:text-[22.89px] md:ml-[10px]">Handcrafted Masterpieces</h5>
              <p className="text-white md:text-[17px] mt-2 md:ml-[10px]">
                Amet quis leo id faucibus auctor penatibus diam pellentesque. <br /> Convallis nisl et
                euismod sit lectus urna purus iaculis. Nibh facilisis <br /> auctor amet ac.
              </p>
                </div>
        </div>
        
        {/* <div className="imgItem flex lg:justify-between items-center my-4 lg:my-[50px] lg:gap-[15px] gap-[10px] lg:flex-col overflow-hidden"> */}
         <div className="relative">
         <Image
          className='md:w-[100%]'
            src={Img2}
            alt="Gallery Image"
          />
             <div className='w-full bottom-0 absolute inset-0 lg:flex flex-col justify-end p-4' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                    height: '100%'
                }}
                >
                  <h1 className="butt md:ml-[20px]" >Gallery</h1>
              <div className='flex gap-[50px] justify-between'>
            <p className="text-white md:text-[17px] mt-2 md:ml-[px]">
            Amet quis leo id faucibus auctor penatibus diam <br className='hidden md:block' /> pellentesque. Convallis nisl et euismod sit lectus 
              </p>
              <Image src={Arrow} alt='next button' className='object-fill w-[%] md:block hidden' />
            </div>
              
                </div>
         </div>
        <div className="relative">
        <Image
          className='md:w-[100%]'
            src={Img3}
            alt="exihibtion Image"
          />
             <div className='w-full bottom-0 absolute inset-0 lg:flex flex-col justify-end p-4' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                    height: '100%'
                }}
                >
                  <h1 className="butt md:ml-[20px]">Exhibition</h1>
            <div className='flex gap-[50px] justify-between'>
            <p className="text-white md:text-[17px] mt-2 md:ml-[20px]">
            Amet quis leo id faucibus auctor penatibus diam <br className='hidden md:block' /> pellentesque. Convallis nisl et euismod sit lectus 
              </p>
              <Image src={Arrow} alt='next button' className='object-fill w-[%] md:block hidden' />
            </div>
                </div>
        </div>
        {/* </div> */}

      </div>
    </section>

    {/* colection section  */}
 <div className='lg:h-[190px] collection p-8'
 style={
  {
    background: 'rgba(211, 211, 211, 0.9)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
 }
 >
  
  <ul
  className='grid grid-cols-2 gap-[30px] lg:flex justify-between items-center md:gap-[180px] text-center flex-wrap'
  >
        <li>
          <p className='number'>15</p>
          <span  className='art md:font-[400]' style={
            {fontSize: '18px'}
          }>Artists</span>
        </li>
        <li>
          <p className='number'>20</p>
          <p className='art' 
          style={
            {fontSize: '18px'}
          }
          >Art Exhibitions</p>
        </li>
        <li>
          <p className='number'>5000+</p>
          <p className='art' 
          style={
            {fontSize: '18px'}
          }
          >Art Pieces Sold</p>
        </li>
        <li>
          <p className='number'>2000+</p>
          <p className='art' 
          style={
            {fontSize: '18px'}
          }
          >Arts Collections</p>
        </li>
      </ul>
 </div>
    </>
  )
}

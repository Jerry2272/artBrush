'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react'
import Slide1 from '@assets/assets/heroGallery.png'
import Slide2 from '@assets/assets/artSlide2.png'
import Img2 from '@assets/assets/heroGallery1.png'
import Img3 from '@assets/assets/heroGallery2.png'
import Arrow from '@assets/assets/arrow.png'


const images = [Slide1 , Slide2 , Slide1];


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
    <section className="hero lg:p-14 pb-0 mb-0 p-8">
      <div className="heroHeadline lg:flex justify-between items-center">
        <h1>Journey Through Art. </h1>
        <p className='pt-10 lg:pt-0'>
          Explore the unique creations of our talented <br className='hidden lg:block' />
          artisans explore the unique creations
        </p>
      </div>
      <div className="heroImage lg:flex justify-between items-center lg:my-[10px] my-5 gap-[15px]">
        <div className="imgItem relative">
          <Image
            className=''
            src={images[indexImg]}
            alt="Collection Image"
          />
              <div className='w-full bottom-0 absolute inset-0 flex flex-col justify-end p-4' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                    height: '100%'
                }}
                >
                  <h1 className="bg-white text-[rgba(26, 26, 26, 1)] px-3 py-2 rounded-lg  text-[24px] w-[160px] font-[700]">Collection</h1>
              <h5 className="font-bold text-white mt-auto">Handcrafted Masterpieces</h5>
              <p className="text-white text-sm mt-2">
                Amet quis leo id faucibus auctor penatibus diam pellentesque. Convallis nisl et
                euismod sit lectus urna purus iaculis. Nibh facilisis auctor amet ac.
              </p>
                </div>
        </div>
        <div className="imgItem flex lg:justify-between items-center my-4 lg:my-[50px] lg:gap-[15px] gap-[10px] lg:flex-col overflow-hidden">
         <div className="relative">
         <Image
          className='lg:w-auto w-[260px]'
            src={Img2}
            alt="Gallery Image"
          />
             <div className='w-full bottom-0 absolute inset-0 lg:flex flex-col justify-end p-4 hidden' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                    height: '100%'
                }}
                >
                  <h1 className="bg-white text-[rgba(26, 26, 26, 1)] px-3 py-2 rounded-lg  text-[24px] w-[160px] font-[700]">Gallery</h1>
              <h5 className="font-bold text-white mt-auto">Handcrafted Masterpieces</h5>
              <div className='flex justify-between'>
            <p className="text-white text-sm mt-2">
            Amet quis leo id faucibus auctor penatibus diam <br /> pellentesque. Convallis nisl et euismod sit lectus 
              </p>
              <Image src={Arrow} alt='next button' className='object-cover w-[50]' />
            </div>
              
                </div>
         </div>
        <div className="relative">
        <Image
          className='lg:w-auto w-[260px]'
            src={Img3}
            alt="exihibtion Image"
          />
             <div className='w-full bottom-0 absolute inset-0 lg:flex flex-col justify-end p-4 hidden' 
                style={{
                    background: 'linear-gradient(174.35deg, rgba(26, 26, 26, 0) 57.17%, #1A1A1A 77.39%)',
                    borderRadius: '12.11px',
                    height: '100%'
                }}
                >
                  <h1 className="bg-white text-[rgba(26, 26, 26, 1)] px-3 py-2 rounded-lg  text-[24px] w-[160px] font-[700]">Exhibition</h1>
              <h5 className="font-bold text-white mt-auto">Handcrafted Masterpieces</h5>
            <div className='flex justify-between'>
            <p className="text-white text-sm mt-2">
            Amet quis leo id faucibus auctor penatibus diam <br /> pellentesque. Convallis nisl et euismod sit lectus 
              </p>
              <Image src={Arrow} alt='next button' className='object-cover w-[50]' />
            </div>
                </div>
        </div>
        </div>
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
  className='grid grid-cols-2 gap-[30px] lg:flex justify-between items-center lg:gap-[90px] text-center flex-wrap'
  >
        <li>
          <p className='number'>15</p>
          <p className='art'>Artists</p>
        </li>
        <li>
          <p className='number'>20</p>
          <p className='art'>Art Exhibitions</p>
        </li>
        <li>
          <p className='number'>5000+</p>
          <p className='art'>Art Pieces Sold</p>
        </li>
        <li>
          <p className='number'>2000+</p>
          <p className='art'>Arts Collections</p>
        </li>
      </ul>
 </div>
    </>
  )
}

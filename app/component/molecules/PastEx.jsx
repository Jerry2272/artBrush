import Image from 'next/image'
import React from 'react'
import digiArt1 from '@assets/assets/digiArt.png'
import digiArt2 from '@assets/assets/digiArt1.png'
import digiArt3 from '@assets/assets/digiArt2.png'

export const PastEx = () => {
  return (
    <section className='flex justify-center items-center flex-col pastExi my-[20px] p-[10px]'>
       <h1 className=''>Past Exhibition Highlights</h1> 
       <h5 className='pb-10'>Explore past exhibition. Relieve the masterpieces.</h5>
       <div className="row flex gap-[20px] lg:flex-row flex-col" >
        <div className="item">
            <div className='relative'>
                <Image 
                alt=""
                src={digiArt1}
                />
                     <div className='p-[20px] absolute w-full bottom-0' 
                style={{
                    background: 'rgba(211, 211, 211, 0.9)',
                    borderRadius: '12.11px',
                }}
                >
                   <span className='flex justify-between'>
                   <h5>Digital Art Forms</h5>
                   <h5 className=''>N150,000</h5>
                   </span>
                    <small>Ruben Abbey</small>
                </div>
            </div>
        </div>
        <div className="item flex  gap-[20px] flex-col">
            <div className='relative'>
                <Image
                alt=""
                src={digiArt2}
                />
                <div className='p-[20px] absolute w-full bottom-0' 
                style={{
                    background: 'rgba(211, 211, 211, 0.9)',
                    borderRadius: '12.11px',
                }}
                >
                   <span className='flex justify-between'>
                   <h5>Digital Art Forms</h5>
                   <h5 className=''>N150,000</h5>
                   </span>
                    <small>Ruben Abbey</small>
                </div>
            </div>
            <div className='relative'>
                <Image 
                alt=""
                    src={digiArt3}
                />
                     <div className='p-[20px] absolute w-full bottom-0' 
                style={{
                    background: 'rgba(211, 211, 211, 0.9)',
                    borderRadius: '12.11px',
                }}
                >
                   <span className='flex justify-between'>
                   <h5>Digital Art Forms</h5>
                   <h5 className=''>N150,000</h5>
                   </span>
                    <small>Ruben Abbey</small>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

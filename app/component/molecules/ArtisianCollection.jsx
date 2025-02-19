import Image from 'next/image'
import React from 'react'
import Img3 from '@assets/assets/artisiansCollection.png'

export const ArtisianCollection = () => {
  return (
    <section className='lg:my-[40px] lg:p-[50px] p-[20px] flex lg:flex-row flex-col justify-between items-center gap-[40px] art'>
        <div className='textItems'>
            <h1>Artisan’s Collections</h1>
            <p className='h5'>Handcrafted masterpieces from skilled artisian’s</p>
            <p className='para lg:py-[40px] py-[20px]'>
            Amet quis leo id faucibus auctor penatibus diam pellentesque. Convallis nisl et euismod sit lectus urna purus iaculis. Nibh facilisis auctor amet ac. Urna adipiscing fusce venenatis nunc. Massa urna id fermentum ac dolor nulla. Sit turpis consequat sem sed. Pharetra nunc nec dictum sed adipiscing. Faucibus convallis malesuada eu quam et ultricies adipiscing parturient egestas. 
            </p>
            <button className="rounded-[10px] text-white py-4 px-10"
        style={{
          background: "rgba(26, 26, 26, 1)"
        }}
        >Explore all collections</button>
        </div>
        <Image src={Img3} alt="Artisian Collection" />
    </section>
  )
}

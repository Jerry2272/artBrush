import Image from 'next/image'
import React from 'react'
import Img3 from '@assets/assets/artisians-collection.png'

export const ArtisianCollection = () => {
  return (
    <section className='md:my-[40px] p-[20px] flex md:grid-cols-2 md:gap-[2px] art md:px-[7em] justify-center gap-[2em] md:flex-row flex-col items-center'>
        <div className='textItems'>
            <h1>Artisan’s Collection</h1>
            <p className='h5 ' >Handcrafted masterpieces from skilled artisian’s</p>
            <p className='para lg:pt-[5em] py-[20px] md:leading-[50px] md:pr-[60px] md:mb-[2em]'>
            Amet quis leo id faucibus auctor penatibus diam pellentesque. Convallis nisl et euismod sit lectus urna <br /> purus iaculis. Nibh facilisis auctor amet ac. Urna adipiscing fusce venenatis nunc. Massa urna id fermentum ac dolor nulla. Sit turpis consequat sem sed. Pharetra nunc nec dictum sed adipiscing. Faucibus convallis malesuada eu quam et ultricies adipiscing parturient egestas. 
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

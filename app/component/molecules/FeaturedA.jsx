import Image from 'next/image'
import React from 'react'
import Artist1 from '@assets/assets/artist1.png'
import Artist2 from '@assets/assets/artist2.png'
import Artist3 from '@assets/assets/artist3.png'


export const FeaturedA = () => {
    return (
        <section className='my-10 flex justify-center flex-col items-center featuredArt md:mt-[5em] md:mx-[129px] '>
            <h1 className='text-center'>Featured Artists</h1>
            <h5 className='text-center'>See our artists and explore there different work</h5>
            <div className="row flex gap-4 justify-center items-center flex-col lg:flex-row my-10">
                <div className="item">
                    <div className='relative'>
                        <Image
                            src={Artist2}
                            className='rounded-lg'
                            alt=""
                        />
                        <div className='p-[20px] pb-1 absolute w-full bottom-0'
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '12.11px',
                            }}
                        >
                            <h5 className="text-black font-semibold text-[32.31px] leading-[44.07px] sm:text-[24px] sm:leading-[34px]">
                                Kingsley Ordu
                            </h5>
                            <p className="font-nunito font-semibold md:text-[16px] leading-[22.03px] sm:text-[14px] sm:leading-[20px] py-2"
                            style={{
                                color: 'rgba(26, 26, 26, 1)'
                            }}
                            >
                                A modern artist working in the style of technology
                            </p>
                          <div className='flex items-center justify-end' >
                          <button className="rounded-[10px] text-black py-1  px-3 ml-auto md:mb-[6px]"
        style={{
          background: "transparent",
          border: '1px solid #000'
        }}
        >See Works</button>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='relative'>
                        <Image
                            className='rounded-lg'
                            alt=""
                            src={Artist1}
                        />
                  <div className='p-[20px] pb-1 absolute w-full bottom-0 text-white'
                            style={{
                                background: 'rgba(17, 17, 17, 1)',
                                borderRadius: '12.11px',
                            }}
                        >
                            <h5 className="text-white font-semibold text-[32.31px] leading-[44.07px] sm:text-[24px] sm:leading-[34px]">
                                Victory Olu
                            </h5>
                            <p className="font-nunito font-semibold md:text-[16px] leading-[22.03px] sm:text-[14px] sm:leading-[20px] py-2" 
                            style={
                                {color: 'rgba(227, 227, 227, 1)'}
                            }
                            >
                                A modern artist working in the style of technology
                            </p>
                          <div className='flex items-center justify-end' >
                          <button className="rounded-[10px] text-black py-1  px-3 ml-auto md:mb-[6px]"
        style={{
          background: "white",
        }}
        >See Works</button>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='relative'>
                        <Image
                            className='rounded-lg'
                            alt=""
                            src={Artist3}
                        />
                    <div className='p-[20px] pb-1 absolute w-full bottom-0'
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '12.11px',
                            }}
                        >
                            <h5 className="text-black font-semibold text-[32.31px] leading-[44.07px] sm:text-[24px] sm:leading-[34px]">
                                Emmanuel Joe
                            </h5>
                            <p className="font-nunito font-semibold md:text-[16px] leading-[22.03px] sm:text-[14px] sm:leading-[20px] py-2 text-[rgba(26, 26, 26, 1)]">
                                A modern artist working in the style of technology
                            </p>
                          <div className='flex items-center justify-end' >
                          <button className="rounded-[10px] text-black py-1  px-3 ml-auto md:mb-[6px]"
        style={{
          background: "transparent",
          border: '1px solid #000'
        }}
        >See Works</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

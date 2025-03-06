import React from 'react'

export const UpcomingEvent = () => {
  return (
    <section className="upcoming-event lg:my-[40px] my-[20px] py-[50px] px-[20px] md:mb-[5em] md:m-[129px]  md:h-[120vh]"
    >
        <div className="container bg-white md:w-[40%]  p-[40px] rounded-[12px]">
            <h5 className=''>Upcoming Event</h5>
            <h3>Art Gallery Exhibition</h3>
            <p className='py-[30px]' 
            style={{
                color:  'rgba(98, 98, 98, 1)',
                textAlign: 'justify'
            }}
            >
            Explore a diverse collection of artworks wonderfully crafted by brilliant artists from different corners of the world. Be amazed by the awesomeness and quality of the paintings and share your feelings with the artists in this auspicious evening. 
            </p>
            <ul className='mb-[32px] flex flex-col gap-6'
            style={{
                color: 'rgba(98, 98, 98, 1)',
                fontWeight: '700'
            }}
            >
                <li>Date : Oct 19, 2024</li>
                <li>Venue : Orominike Art College</li>
                <li>Organizer : Adebayo’s Art</li>
            </ul>
            <button className="rounded-[10px] text-white py-3 px-12"
        style={{
          background: "rgba(26, 26, 26, 1)"
        }}
        >Learn More</button>
        </div>
    </section>
  )
}

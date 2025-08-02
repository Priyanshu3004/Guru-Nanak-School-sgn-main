import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function AboutTradition() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className="  ">

      <div className='  bg-[#990000] w-full h-[120em]  '>
        <div className='container mx-auto '>
          <div className=' flex justify-center'>
            <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image2/Pasted Graphic 1_1.jpg" alt="image description" />
          </div>
        </div>
        <section className="bg-white  -mt-[4em]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 uppercase">About
                <span className='text-[#990000]'>TRADITION</span>
              </h1>
              <p className="max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-[15px] text-justify">The students and teachers of MCGS School, Ajmer have a lot to be proud of. This institution has been imparting quality education since its inception. Today, it is one of the most sought-after schools in the country with a rich history and legacy.
The school has been awarded the status of ' India's top girls' boarding school. The academy provides high-quality education to its students by providing them with state-of-the-art infrastructure along with well-qualified staff members who are dedicated towards their work and are always ready to help students in achieving their goals in life through their education.
The school also has an interesting tradition near the end of April, just before the girls leave for spring break, called Jamila Singh House Day. This event involves every student in grades 4, 5, and 6. 
In addition to performances from all four dance styles—Kathak, Bharatnatyam, Odissi, and Folk—this thrilling event also features a Hindustani group song and a junior orchestra. 
A drama presented by their incredibly bright pupils stimulates the audience's mind at the occasion.
The goal of this extraordinary event is to provide comfort for the new members of the Mayo Girls College School family and inspire them to share their special talents in a welcoming environment.
</p>

            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img className=' md:w-[80%]' src="image2/Pasted Graphic 2_1.jpg" alt="mockup" />
            </div>
          </div>
        </section>


      </div>
    </Layout>
  )
}

export default AboutTradition
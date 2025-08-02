import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

function Shruti() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="hero" src="alum_image/Shruti Kumari.jpg" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Princess Shruti <br />
                            The Royal Highness of Nepal</h1>
                        <p className="mb-8 leading-relaxed text-justify">In Tripureswar, Nepal, Princess Shruti attended Kanti Ishwari Sishu Vidhyalaya. Saint Mary's School in Kathmandu, Nepal, followed. In Ajmer, India, she finally enrolled in Mayo College Girls School. She earned her bachelor's degree from Nepal's Padma Kanya Campus.
                            Princess Shruti of Nepal was a dedicated student with high ambitions and dreams of making the world more beautiful. She always wanted to do something in her life that would help others, especially those less fortunate than her.
                            She was a member of MUN at Mayo College Girls School.
                            Shruti had always been passionate about gender equality, climate change and social entrepreneurship. She was a very proactive person who tried to do her best in all her activities.
                            She had a keen interest in music, dance, and drama from an early age and continued her studies in these fields throughout her life.
                            In her short life, she achieved many prestigious awards and recognitions. Some include National Honours Member First Class of the Order of Gorkha Dakshina Bahu (29/12/1995). Commemorative Silver Jubilee Medal of King Birendra (31/01/1997). Bisista Sewa Padak (1999). Foreign Honours France: Grand Officer of the Order of the Legion of Honour (20/09/1994). Germany: Dame Grand Cross Order of Merit of the Federal Republic of Germany (25/11/1996).
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Shruti
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

function Harshi() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="hero" src="alum_image/HArshi.jpg" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Harshi Agarwal<br />
                            Founder of Brushes N Strokes
                        </h1>
                        <p className="mb-8 leading-relaxed text-justify">Harshi Agarwal was a studious creative student who loved to create. She excelled at Mayo Girls College School and loved her work there, but it wasn't until she started assembling in her free time that she found her passion.
                            She discovered that creating things made her feel like she could change the world. Soon everyone wanted to know more about this incredible woman doing such important work!
                            Harshi has always been intrigued by the world of art and media and conti%nues to thrive in it. After completing her schooling at MCGS, she got her bachelor's degree from Jai Hindu Jobs and is doing her MBA from the Symbiosis Institute of Media and Communication.
                            She founded Brushes N' Strokes with her partner, has actively worked in the media field, and continues to do so. Founded in January 2014, the business Brushes n Strokes sells oil paints and doodle art equipment. It resembled a hobby that was transformed into a business. Brushes N Strokes is a company that sells art and is known for its personalized work. They offer a wide range of products, such as paintings, pencils, oil pastels, etc. Their products are affordable, and affordable prices can be found with discounts offered by the company on certain days of the week.


                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Harshi
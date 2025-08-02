import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

function Chhavi() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="hero" src="alum_image/chhavi.jpg" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Chhavi Rajawat<br />
                            India's Youngest Sarpanch</h1>
                        <p className="mb-8 leading-relaxed text-justify">Chhavi was described as vivacious, intelligent and intellectual by her teachers. She secured a place at Lady Sri Ram college after studying at Mayo College Girls School. Chhavi Rajawat was an excellent student with tremendous capabilities and a passion to change the world and make it a better place. She had the unique skill of being able to understand the needs of others and work towards their betterment.
                            Presently, a South Asia Advisory Council, Bayer’s member Chhavi Rajawat was the youngest Sarpanch of the village council of Soda in February of 2010. To guarantee that Soda's citizens had access to the necessities, she concentrated on infrastructural development.

                            After completing all of the residents' requests during her first term, she was re-elected as sarpanch in February 2015 with a sizable majority.
                            Over ten years, the community underwent a lot of development. The Rajasthan State Government and organisations, including J.C. Bamford India Limited, The Himalaya Drug Company, Hindustan Coca-Cola Foundation, and The Oberoi Group of Hotels are prominent backers of several of their programmes.

                            Bayer is a multinational company with primary expertise in the life science industries of agriculture and healthcare. Their goods and services serve consumers and raise their standard of living. They want to add value through innovation, expansion, and high-earning potential.

                            Their goods aid in addressing some of the most pressing issues of the day. Such as the ageing population, the need for effective and sustainable resource use and the rise of the world's population.
                            Chhavi is a Young Global Leader of the World Economic Forum and an Aspen fellow. She took part in numerous national and international initiatives, such as the 11th Info-Poverty World Conference held at the United Nations in New York City, the Australia-India Youth Dialogue, the International Visitors Leadership Programme, and the Asian Forum on Global Governance.
                            For her contributions to the community, Chhavi has won numerous honours, including the First Ladies National Award from the Hon. President Shri Ram Nath Kovind, the Reebok Fit To Fight Award, the Young Indian Leader Award from CNN/IBN, the Grassroots Women of the Decade Achievers Award, and the Bharat Ratna Rajiv Gandhi Yuva Shakti National Award.

                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Chhavi
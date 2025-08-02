import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

function Vedita() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="hero" src="alum_image/Vedita.jpg" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Vedita Pratap Singh<br />
                            Famous Bollywood Actress
                        </h1>
                        <p className="mb-8 leading-relaxed text-justify">Vedita Pratap Singh was an artistic, hard-working student at Mayo College Girls School. She was deeply involved in the dramatics, dance and choir and had a strong creative streak. She was also an active participant in the various events held at the school.
                            The Indian actor and model Vedita Pratap Singh's first debut movie was Bhindi Bazaar.
                            She then made multiple TV appearances in ads for well-known companies like Parachute Oil and Bajaj Allianz. Vedita took part in and won the Channel V India television programme India's Hottest in 2008.
                            Her other notable filmography includes the Hindi dramas JD (2017) and Danger (2017), both directed by Shailendra Pandey, as well as Mumbai 125 KM (2014). She worked in the Gagan Puri-directed horror film The Past in 2018.
                            Moreover, Vedita Pratap Singh has been awarded the Uttar Pradesh Gaurav Samman. The state government of Uttar Pradesh established the UP Awards to reward those who bring honour to the state. The award can be seen as a state counterpart of the Padma, and one can recognise it as the Highest Civilian Award in Uttar Pradesh.


                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Vedita
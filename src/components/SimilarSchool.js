import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function SimilarSchool() {


    const des1 = "In Tripureswar, Nepal, Princess Shruti attended Kanti Ishwari Sishu Vidhyalaya. Saint Mary's School in Kathmandu, Nepal, followed. In Ajmer, India, she finally enrolled in Mayo College Girls School. She earned her bachelor's degree from Nepal's Padma Kanya Campus."

    const des2 = "Vedita Pratap Singh was an artistic, hard-working student at Mayo College Girls School. She was deeply involved in the dramatics, dance and choir and had a strong creative streak. She was also an active participant in the various events held at the school."

    const des3 = "Chhavi was described as vivacious, intelligent and intellectual by her teachers. She secured a place at Lady Sri Ram college after studying at Mayo College Girls School. Chhavi Rajawat was an excellent student with tremendous capabilities and a passion to change the world and make it a better place. She had the unique skill of being able to understand the needs of others and work towards their betterment. "
    
    const des4 = "Harshi Agarwal was a studious creative student who loved to create. She excelled at Mayo Girls College School and loved her work there, but it wasn't until she started assembling in her free time that she found her passion."
    return (
        <div>
            {/* <section className="text-gray-600 body-font bg-[#DBDBDB]">
                <div className="container px-5 py-10 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-5 md:mb-10">
                        <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl title-font mb-2 text-[#03001B] font-bold">SIMILAR SCHOOL <span className=' text-red-700'>OPTIONS</span></h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[32em] md:h-[532px] box__shadow ">
                                <img className="h-40  w-full  object-center mb-6" src="img/rectangle-95@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Scindia Kanya Vidyalaya</h2>
                                <p className="leading-relaxed text-base text-center">Scindia Kanya Vidyalaya is a premium girls school that help children to grow both academically and personally. There
                                    is a 40 % chance for your child to study here </p>
                                <div className=' text-center my-10'>
                                    <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl  similar__school2  box__shadow">
                                <img className="h-40  w-full  object-center mb-6" src="img/rectangle-98@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Ecole Globale International
                                    Girls school</h2>
                                <p className="leading-relaxed text-base text-center">Eco Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission</p>
                                <div className=' text-center my-4'>
                                    <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Submit</button>
                                </div>
                            </div>
                        </div>


                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[32em] md:h-[532px] box__shadow">
                                <img className="h-40  w-full  object-center mb-6" src="img/rectangle-101@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Welham Girls School</h2>
                                <p className="leading-relaxed text-base text-center">Scindia Kanya Vidyalaya is a premium girls school that help children to grow both academically and personally. There
                                    is a 40 % chance for your child to study here </p>
                                <div className=' text-center my-10'>
                                    <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4 w-full">
                            <div className="bg-gray-100 p-6 rounded-2xl box__shadow">
                              
                                <h1 className=' text-center font-bold text-[#990000] relative top-[62px] text-2xl '>APPLY FOR
                                    ADMISSIONS</h1>

                                <div className='my-[91px] similar__school4'>
                                    <form className=' relative top-[21px]'>

                                        <div className="mb-6">

                                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile input__shadow" placeholder="Enter your name" required />

                                        </div>
                                        <div className="mb-6">

                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile input__shadow" placeholder="name@flowbite.com" required />

                                        </div>
                                        <div className="mb-6">

                                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile input__shadow" required placeholder='Your phone number' />
                                        </div>

                                        <div className=' text-center relative top-[49px] '>
                                            <button type="submit" className="text-white bg-[#FFA700] focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="text-gray-600 body-font bg-[#DBDBDB]">
                <div className="container px-5 py-10 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-0 md:mb-2">
                        <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl title-font mb-2 text-[#03001B] font-bold">ALUMNAE</h1>
                        </div>
                    </div>
                    <div className=" md:mb-6 mb-4">
                        <p className=' text-black '>
                            Mayo College Girls School not only excels at providing world class education but also offers a wide range of extracurricular activities for students to participate in. These activities at Mayo Girls school are intended to provide students with opportunities to develop a wide range of skills and interests outside of the classroom, while also fostering a sense of community and teamwork.
                            </p>
                        </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[32em] md:h-[532px] box__shadow ">
                                <img className="h-70 md:h-40  w-full rounded-lg  object-center mb-6" src="alum_image/Shruti Kumari.jpg" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Princess Shruti <br />
                                    The Royal Highness of Nepal
                                </h2>
                                <p className="leading-relaxed text-base text-center">{des1.substring(0,160)}
</p>
                                <div className=' text-center my-4'>
                                    <Link to={'/shruti'}>  <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center ">
                                      Read More</button>  </Link>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl  similar__school2  box__shadow">
                                <img className=" h-70 md:h-40  w-full  rounded-lg  object-center mb-6" src="alum_image/Vedita.jpg" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Vedita Pratap Singh <br />
                                    Famous Bollywood Actress</h2>
                                <p className="leading-relaxed text-base text-center">{des2.substring(0,160)}</p>
                                <div className=' text-center my-4'>
                                    <Link to={'/vedita'}><button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Read More</button>  </Link>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[32em] md:h-[532px] box__shadow">
                                <img className="h-70 md:h-40  w-full rounded-lg  object-center mb-6" src="alum_image/chhavi.jpg" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Chhavi Rajawat <br />
                                    India's Youngest Sarpanch</h2>
                                <p className="leading-relaxed text-base text-center">{des3.substring(0,160)}
</p>
                                <div className=' text-center my-4'>
                                    <Link to={'/chhavi'}> <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center">Read More</button>  </Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-6 md:p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[32em] md:h-[532px] box__shadow">
                                <img className="h-70 md:h-40  w-full rounded-lg  object-center mb-6" src="alum_image/HArshi.jpg" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Harshi Agarwal <br />
                                Founder of Brushes N Strokes</h2>
                                <p className="leading-relaxed text-base text-center">{des4.substring(0,150)}
</p>
                                <div className=' text-center my-4'>
                                <Link to={'/harshi'}> <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center">Read More</button>  </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SimilarSchool
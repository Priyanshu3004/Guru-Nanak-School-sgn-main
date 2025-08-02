import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function Howtoregister() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className="  ">

      <div className='  bg-[#990000] w-full  '>
        <div className='container mx-auto '>
          <div className=' flex justify-center'>
            <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image2/Pasted Graphic_1.jpg" alt="image description" />
          </div>
        </div>
        <div className=' -mt-[4em]'>
            {/* how to register  */}
        <div className=" bg-white p-8 md:p-14">
          <div className=' container mx-auto '>
            <div>
              <h1 className=' uppercase text-3xl mb-6 font-bold'>How To <span className='text-[#990000]'>Register</span></h1>
              <h2 className='mb-6 font-medium text-2xl'>How to register?</h2>
              <p className='mb-6 leading-relaxed text-justify'>
                If you wish to register your child, kindly fill out the registration form and like ok.
                The admissions process begins with a registration application. For the girl's name to be registered for the year and class for which admission is desired, a registration fee must be paid together with the application. The charge is only good for the designated academic year and is neither refundable nor modifiable. A girl's registration does not ensure her entrance.</p>
            </div>
            <div>
              <h1 className='mb-6 font-medium text-2xl'>Expections For Registration</h1>
              <ul className='list-disc p-5'>
                <li>One recent passport-size photograph of the girl has to be attached.</li>
                <li>The completed registration form must be sent along with the registration fee and an authenticated photocopy of the student's birth certificate.
                  (Please Note: The girl's birth certificate needs to be produced by the county's registrar of births and deaths.
                  Affidavits, hospital certificates, or credentials from any other source   are not recognised.)</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Assessment of proficiency */}
        <div className=" bg-[#990000] p-8 md:p-14">
          <div className=' container mx-auto '>
            <div>
              <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium text-white'>Assessment of proficiency</h1>
              <ul className='list-disc p-5'>
                <li className='mb-5 text-white text-lg'>Admissions are only expected for classes VI &VII after appearing in an Aptitude/Proficiency Assessment.</li>
                <li className='mb-5 text-white text-lg'>The assessment is held in November/December each year for fulfilling the seats for the following academic year.
                </li>
                <li className='mb-5 text-white text-lg'>Offers of admission are given based on the results of these Assessments and depend on the number of vacancies in each class
                </li>
                <li className='mb-5 text-white text-lg'>Preference is given to the following:
                </li>
                <li className='mb-5 text-white text-lg'>Daughters of transferable Government officials and serving Armed Forces personnel.
                </li>
                <li className='mb-5 text-white text-lg'>Girls whose mothers have studied in this school for a minimum of four years or who have passed out of school at the end of Class XII.
                </li>
                <li className='mb-5 text-white text-lg'>Girls whose siblings have studied or are at present studying in the School. For admission to Class XI, however, there is no markup since this depends on the Board examination results.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Admittance Documents Required */}
        <div className=" bg-white p-8 md:p-14">
          <div className=' container mx-auto '>
            <div>
              <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium '>Admittance Documents Required</h1>
              <ul className='list-disc list-inside'>
                <li className='mb-5 text-lg'>Original Birth Certificate.
                </li>
                <li className='mb-5 text-lg'>Transfer Certificate.
                </li>
                <li className='mb-5 text-lg'>Character Certificate.
                </li>
                <li className='mb-5 text-lg'>Medical Certificate.
                </li>
                <li className='mb-5 text-lg'>Migration Certificate

                </li>
                <li className='mb-5 text-lg'>Last Report Card indicating promotion to the next class, along with attendance proof of the previous year.
                </li>
                <li className='mb-5 text-lg'>Photographs- Three recent passport-size photographs</li>
                <li className='mb-5 text-lg'>The above-mentioned certificates need to be submitted to the school on the child's first day.</li>
                <li className='mb-5 text-lg'>This is required for admission to Class XI in the case of students from Boards other than the CISCE.</li>

              </ul>
            </div>
          </div>
        </div>

        <div className=" bg-[#990000] p-8 md:p-14">
          <div className=' container mx-auto '>
            <div>
              <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium text-white '>Renewal For Classes VI & VII</h1>
              <ul className='list-disc p-5'>
                <li className='mb-5 text-lg text-white'>All registrations are done for a particular year and the class requested by the parent.

                </li>
                <li className='mb-5 text-lg text-white'>An additional fee is assessed and the child is given a new registration number if a parent chooses to re-register.

                </li>
                <li className='mb-5 text-lg text-white'>However, a child whose registration has either failed the assessment or has lapsed for any other reason must be re-registered within a year of the lapse; failing to do so will result in the payment of the full registration fees once more.
                </li>
              </ul>
            </div>
          </div>
          <div className=' container mx-auto '>
            <div>
              <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium text-white '>Class XI Registration Requirements</h1>
              <ul className='list-disc p-5'>
                <li className='mb-5 text-lg text-white'>A student is expected to score a minimum of 80% in the examination conducted by the school.


                </li>
                <li className='mb-5 text-lg text-white'>The session for selected students will start in April.
                </li>
                <li className='mb-5 text-lg text-white'>Students are expected to submit the following as soon as their result is declared Copy of the Board Mark sheet
                </li>
                <li className='mb-5 text-lg text-white'>Pass certificate

                </li>
                <li className='mb-5 text-lg text-white'>Migration Certificate (if not from ICSE Board)

                </li>
                <li className='mb-5 text-lg text-white'>Transfer Certificates
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </Layout>
  )
}

export default Howtoregister
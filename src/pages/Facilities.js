import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function Facilities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className="  ">

    <div className='  bg-[#990000] w-full h-[120em]  '>
      <div className='container mx-auto '>
        <div className=' flex justify-center'>
          <im class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="img/Pasted Graphic 2_1.jpg" alt="image description" />
        </div>
      </div>
      <div className=' -mt-[4em]'>
          {/* how to register  */}
      <div className=" bg-white p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-3xl mb-6 font-bold'>About <span className='text-[#990000]'> Facilities</span></h1>
            <h2 className='mb-6 font-medium text-2xl uppercase'>Academic Facilities
</h2>
            <p className='mb-6 leading-relaxed text-justify'>
            MCGS is one of the most well-known schools in the region and has a reputation for excellence. It has been rated as one of the top 10 schools in India by Education World Magazine, a leading publication in the education industry. 
            <br/>
            <br/>
The academic facilities at MCGS are well-equipped to meet the needs of students. The school is situated in a prime location that offers students easy access to transit as well as many recreational facilities. MCGS has marked years of the culmination of hard work and diligence of its leaders in creating history in the era of a highly competitive education system.
<br/>
<br/>
MCGS does not compromise in providing the students with the best education. The school has world-class facilities that provide a great learning environment for all its students. A computer lab with over 100 computers, Students can use these computers to enhance computer skills like using Microsoft Office applications and integrate with teachers to learn in-demand skills like coding and web designing. A library with over 20,000 books, a language lab with 30 computers, an audio-visual room equipped with LCD projectors and an auditorium equipped with full stage lighting, sound system and green screen facility. There are separate laboratories for Physics, Chemistry and Biology.
<br/>
<br/>
The school offers a wide range of academic programs including Advanced Placement (AP), the IB Diploma, and the International Baccalaureate (IB) program. MCGS also has special programs including programs for gifted students, special education and ELL (English Language Learning) students.
<br/>
<br/>
MCGS has an excellent track record in preparing its graduates for post-secondary education and it offers assistance with applications to universities and colleges across Canada and around the world.
</p>
          </div>
          
        </div>
      </div>
      {/* Assessment of proficiency */}
      <div className=" bg-[#990000] p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium text-white'>Boarding Facilities</h1>
           <p className='mb-6 leading-relaxed text-justify text-white'>
           The MCGS boarding facilities are located on the main campus in the heart of Ajmer. They provide a safe and comfortable environment for our students to live in while they attend classes at MCGS.
           <br/>
The dorms are designed to make you feel at home while you’re away from home. The dormitories have a capacity of up to 55 students per building, with rooms ranging from singles to doubles. Each room has its bathroom and shower facility, with laundry facilities on each floor. The dorms are attached to a common room for studying, and recreation. The buildings are heated in the winter months to keep the students warm during their stay with us. The dorms also include a game room with pool tables and other games for entertainment purposes.
<br/>
The MCGS dining hall is located right next door to the boarding facilities so that students can enjoy meals with their friends during their stay at MCGS. There is also an outdoor patio area where students can relax or study. The staff members are available 24 hours a day, so you can reach out to them whenever you need help. 

           </p>
          </div>
        </div>
      </div>

      {/* Admittance Documents Required */}
      <div className=" bg-white p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium '>Sports Facilities
</h1>
<p className='mb-6 leading-relaxed text-justify'>
The MCGS campus is located in a tranquil, spacious and green environment. It has a sports complex with facilities for indoor and outdoor games, which are used by students as well as staff. The grounds also have an open-air auditorium and a cafeteria.
<br/>
There are many facilities available for sports and games at MCGS.
The main sports facilities include:

</p>
            <ul className='list-disc list-inside'>
              <li className='mb-5 text-lg'>     An indoor badminton court with eight tables
              </li>
              <li className='mb-5 text-lg'>     A basketball court with basket and ball.
              </li>
              <li className='mb-5 text-lg'>     A chess board, which can be used for both chess and checkers.

              </li>
              <li className='mb-5 text-lg'>     A table to play board games such as Ludo etc

              </li>
         

            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-[#990000] p-8 md:p-14">
        
       
      </div>
      </div>
    
    </div>
  </Layout>
  )
}

export default Facilities
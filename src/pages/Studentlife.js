import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import '../App.css'
import Hero from '../components/Global/Hero'

function Studentlife() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <Layout className="  ">

    <div className=''>
      <Hero title={"Student Life"} isIcon={false}/>
      <div className=' mt-6'>
          {/* how to register  */}
      <div className=" bg-white p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>

            <p className='mb-6 leading-relaxed text-justify'>
            Shri Guru Nanak Doon Vale School student life is designed to be dynamic, balanced, and enriching. We believe that school should be more than just academics—it should be a place where students discover who they are, build lasting friendships, and grow into well-rounded individuals.
<br/>
<br/>
Our students from <strong>Pre-Nursery to Class VIII</strong> experience a safe, supportive, and inclusive environment where learning is joyful and meaningful. With a strong focus on values, discipline, and responsibility, we ensure that every child feels seen, heard, and respected
<br/>
<br/>
Daily routines include classroom learning, co-curricular activities, and moral instruction. We encourage students to take part in <strong>inter-house competitions</strong>, storytelling, drawing, poetry, and role plays to build creativity and confidence. Events like <strong>Annual Day</strong>, cultural functions, and celebration of national festivals make school life vibrant and memorable.
<br/>
<br/>
The school’s <strong>four-house system</strong>—Ajit, Zorawar, Jujhar, and Fateh—instills teamwork, leadership, and a healthy spirit of competition. Students learn the importance of cooperation, sportsmanship, and personal responsibility through these activities.

</p>
          </div>
          
        </div>
      </div>
     
     
      </div>
    
    </div>
  </Layout>
  )
}

export default Studentlife
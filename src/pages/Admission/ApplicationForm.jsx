import DownloadButton from '../../components/Global/DownloadButton'
import Hero from '../../components/Global/Hero'
import Layout from '../../components/Layout'

const ApplicationForm = () => {
  return (
    <>
    <Layout>
    <div>
        <Hero title={"Admission Form"} icon={""}/>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            

            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="md:float-right md:w-3/6 md:ml-8 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlyZWN0b3J8ZW58MHx8MHx8fDA%3D"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div>
                <p>
                Admission Form – Shri Guru Nanak Doon Vale School

Thank you for your interest in Shri Guru Nanak Doon Vale School, one of the best co-educational schools in Dehradun. We are pleased to invite applications for Pre-Nursery to Class VIII for the upcoming academic year.

Before filling out the admission form, please ensure you have the following documents:


                </p>

                <p>
                 A copy of the child’s birth certificate

Previous school report card (if applicable)

Two passport-size photographs

Address proof of parents/guardians

Kindly complete all fields accurately. Incomplete forms may lead to delays in processing. 
                </p>

                <p>
                 Submission of the form does not guarantee admission; selection is based on seat availability and a brief interaction.

You may download the form here or collect a physical copy from the school office during working hours.

We look forward to welcoming your child to the Doon Vale family and beginning a journey of joyful learning and growth.
                </p>

                <p>
                  We take pride in the culture of collaboration and trust that
                  defines our school. Our dedicated team of educators and staff
                  work tirelessly to ensure that every student feels safe,
                  inspired, and empowered to achieve their full potential.
                </p>

                <p>
                  As we move ahead in an ever-evolving world, our goal is to
                  raise thoughtful, responsible individuals who are not only
                  well-educated but also kind, courageous, and ready to make a
                  meaningful contribution to society.
                </p>

                <p>
                  Thank you for being a part of this journey. We look forward to
                  shaping bright futures, together.
                </p>
                <div className='pt-4'>
                    <DownloadButton buttonText="Application Form"/>
                </div>
              </div>
            </div>
          </div>
    </div>
    </Layout>
    </>
  )
}

export default ApplicationForm
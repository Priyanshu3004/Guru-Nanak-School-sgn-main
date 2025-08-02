import { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Global/Hero";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout className="  ">
      <Hero src={"img/testionialBG.jpg"} title={"About Us"} />
      <div className="">
        <section className="bg-white  mt-[4em]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 uppercase">
                About
                <span className="text-[#990000]"> S.G.N Doon Vale School</span>
              </h1>
              <p className="max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-[15px] text-justify">
                Founded in 1989, Shri Guru Nanak Doon Vale School is a
                co-educational institution committed to delivering quality
                education from Pre-Nursery to Class VIII. Located in the heart
                of Dehradun, our school is known for combining academic
                excellence with strong values, making us one of the best schools
                in Dehradun. At Doon Vale, we believe that education is more
                than just textbooks and exams. Our mission is to nurture young
                minds into responsible, confident, and compassionate individuals
                who are ready to meet the challenges of the future. We follow a
                structured, student-friendly curriculum aligned with CBSE
                standards. Our classrooms are vibrant and engaging, led by
                experienced and caring educators. A wide range of co-curricular
                activities, including music, dance, drawing, and inter-house
                competitions, support holistic development. Our disciplined,
                inclusive environment encourages students to excel both
                academically and personally. With over three decades of trust
                and commitment, Doon Vale continues to be a preferred choice for
                parents seeking a well-rounded education for their children. We
                welcome you to be a part of the Doon Vale family.
              </p>
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img
                className=" md:w-[80%]"
                src="img/moreabout.jpg"
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;

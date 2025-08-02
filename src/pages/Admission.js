import React, { useEffect } from "react";
import Layout from "../components/Layout";
import DownloadButton from "../components/Global/DownloadButton";
import Hero from "../components/Global/Hero";

function Admission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout className="  ">
      <div className=" ">
        {/* <div className="container mx-auto hidden">
          <div className=" flex justify-center">
            <img
              class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]"
              src="img/admission.jpg"
              alt="image description"
            />
          </div>
        </div> */}
        <Hero title={"Admission"} src={"img/admission.jpg"} isIcon={false} />

        <section className="bg-white  mt-[4em]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="title-font sm:text-4xl text-3xl hidden  font-bold text-gray-900 uppercase mb-5">
                About
                <span className="text-[#990000]"> Admission</span>
              </h1>
              <h1 className=" mb-5 font-large sm:text-2xl text-xl font-bold ">
                ADMISSION INFORMATION
              </h1>
              <p className="max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-[15px] text-justify">
                We welcome new admissions from Pre-Nursery to Class VIII for the
                upcoming academic session. At Shri Guru Nanak Doon Vale School,
                our admission process is simple, transparent, and designed to
                ensure a smooth transition for both students and parents.
                Parents are encouraged to visit the school campus and interact
                with our admission team to understand our academic approach,
                facilities, and co-curricular offerings. Admission is granted
                based on interaction with the child and seat availability in the
                respective class. Application forms are available at the school
                office during working hours. Required documents include the
                child’s birth certificate, previous school records (if
                applicable), and passport-size photographs. Join one of the best
                schools in Dehradun and give your child the right start in a
                supportive, value-driven learning environment.
              </p>
              <div className="pt-4">
                <DownloadButton />
              </div>
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img
                className=" md:w-[80%]"
                src="img/admission.jpg"
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Admission;

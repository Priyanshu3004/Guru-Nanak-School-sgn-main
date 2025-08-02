import { BookOpenCheck, CalendarDays, Landmark } from "lucide-react";
import React from "react";
import Layout from "../../components/Layout";

const OurHistory = () => {
  return (
    <>
      <Layout className="  ">
        <div className="bg-white text-[#990000]">
          {/* Hero */}
          <section className="relative h-[60vh] w-full">
            <img
              src="img/school_hor-5.JPG"
              alt="School heritage"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
              <Landmark className="text-white w-12 h-12 mb-4" />
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center">
                Our History
              </h1>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-6 max-w-6xl mx-auto">
            <div className="w-full max-w-3xl mx-auto text-center space-y-8">
              <p className="text-[#990000] text-2xl md:text-3xl font-semibold mb-4 text-center">
                A Legacy of Excellence Since 1989
              </p>
              <p className="text-lg leading-relaxed ">
                The foundation of this esteemed institution was laid on 16th
                July 1989, when a humble dream took shape. It was on this very
                date that the first brick was placed on the land by the managing
                members of Shri Guru Nanak Public Shiksha Samiti — a society
                formed with a strong desire to provide accessible, value-based
                education in the Cantonment area of Dehradun. The site chosen
                was undeveloped, yet brimming with hope and potential. With no
                grand structures in place, just the noble intention to serve the
                community, the journey of building the school began.
              </p>

              <p className="text-lg leading-relaxed">
                After four years of committed effort, the dream finally took
                concrete shape. On 4th July 1993, Shri Guru Nanak Doon Vale
                School opened its doors to students for the very first time.
                What began as a modest institution started its academic journey
                with limited resources but limitless hope. The opening was
                marked with simplicity, but the occasion held profound
                significance for the community. Parents, teachers, and
                volunteers saw in this school a new opportunity for future
                generations.
              </p>

              <p className="text-lg leading-relaxed">
                What began as a humble institution has now evolved into one of
                the best schools in Dehradun, widely recognised for its
                consistent academic results, progressive teaching methods, and
                strong moral foundation. Over the years, S.G.N. Doon Vale School
                has educated thousands of students, shaping them into
                responsible, confident, and capable individuals.
              </p>

              <p className="text-lg leading-relaxed">
                With over three decades of experience in education, our school
                continues to uphold its founding vision—offering quality,
                value-based education that empowers students to succeed not just
                in academics, but in life.
              </p>

              <p className="text-lg leading-relaxed">
                As a trusted co-educational school in Dehradun, we remain
                committed to evolving with time while preserving the values that
                define our legacy. Our history is not just a timeline—it is a
                living story of passion, perseverance, and progress that
                continues to inspire generations.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default OurHistory;

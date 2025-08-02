import React from "react";
import Hero from "../../components/Global/Hero";
import DownloadButton from "../../components/Global/DownloadButton";
import Layout from "../../components/Layout";

const TcForm = () => {
  return (
    <>
      <Layout>
        <div>
          <Hero title={"TC Form"} icon={""} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {/* <div className="md:float-right md:w-3/6 md:ml-8 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlyZWN0b3J8ZW58MHx8MHx8fDA%3D"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div> */}
                <p>
                  Education is the most powerful tool we can offer the next
                  generation—a tool that not only shapes intellect but also
                  builds character, resilience, and purpose.
                </p>

                <p>
                  At Shri Guru Nanak Doon Vale School, we are committed to
                  nurturing young minds in a way that prepares them for both
                  academic success and the responsibilities of life. Our vision
                  is to create a learning environment that is inclusive,
                  forward-thinking, and rooted in strong values such as
                  integrity, empathy, respect, and discipline.
                </p>

                <p>
                  From the moment a child enters our school, we aim to provide
                  them with every opportunity to grow intellectually,
                  emotionally, and socially. Our academic framework is designed
                  to encourage curiosity, creativity, and critical thinking,
                  while our co-curricular and extracurricular programs help
                  students discover their passions and build confidence.
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
                <div className="pt-4">
                  <DownloadButton buttonText="TC Form" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TcForm;

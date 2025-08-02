import Layout from "../../components/Layout";

const SecretaryMessage = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <section className="relative h-[60vh] w-full">
            <img
              src="img/moreabout.jpg"
              alt="Director Message Background"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 text-center">
                Secretary Message
              </h1>
              <p className="text-white hidden text-lg md:text-xl text-center max-w-2xl">
                “True education nurtures both the intellect and the soul.”
              </p>
            </div>
          </section>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Quote */}
            {/* <div className="text-center mb-12">
              <Quote className="w-12 h-12 text-[#990000] mx-auto mb-4" />
              <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-800 italic">
                "True education nurtures both the intellect and the soul."
              </blockquote>
            </div> */}

            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="md:float-right md:w-3/6 md:ml-8 mb-6">
                  <img
                    src="img/director.jpg"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div>
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
              </div>

              {/* Signature */}
              {/* <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-right">
                  <p className="font-semibold text-gray-800">Warm regards,</p>
                  <p className="font-bold text-[#990000] text-lg mt-2">
                    [Name]
                  </p>
                  <p className="text-gray-600">Chairman</p>
                  <p className="text-gray-600">
                    Shri Guru Nanak Doon Vale School
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SecretaryMessage;

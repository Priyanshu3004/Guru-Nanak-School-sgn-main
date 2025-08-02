import { Eye, Heart, Lightbulb, Star, Target, Users } from "lucide-react";
import Hero from "../../components/Global/Hero";
import Layout from "../../components/Layout";

const Mission = () => {
  const coreValues = [
    {
      icon: Star,
      title: "Excellence",
      description: "In academics, character, and personal growth",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding honesty and moral responsibility",
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Encouraging punctuality, consistency, and commitment",
    },
    {
      icon: Users,
      title: "Empathy",
      description: "Promoting respect, kindness, and sensitivity",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Inspiring curiosity, innovation, and independent thought",
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description:"Providing equal opportunities for all students regardless of background",
    },
    {
    icon: Eye,
    title: "Vision",
    description: "Seeing possibilities and planning for the future",
  },
  ];
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <div className="bg-[#990000] text-white py-16 hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-6">
                <Eye className="w-12 h-12 mr-4" />
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Vision, Mission & Core Values
                </h1>
              </div>
            </div>
          </div>
          <Hero title={"Vision, Mission & Core Values"} icon={<Eye className="w-12 h-12 mr-4" />} />

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Vision Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <Eye className="w-16 h-16 text-[#990000] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  To be recognised as one of the best schools in Dehradun,
                  nurturing young minds with knowledge, confidence, and
                  compassion. We envision a learning community where students
                  grow into responsible individuals, capable of critical
                  thinking and positive contribution to society.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 text-[#990000] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <div className="bg-gray-50 text-gray-700 p-8 rounded-lg">
                <p className="text-lg leading-relaxed text-center">
                  At Shri Guru Nanak Doon Vale School, our mission is to provide
                  a balanced and inclusive education that fosters academic
                  excellence, creativity, emotional well-being, and ethical
                  values. We strive to create an environment that inspires
                  students from Class 1 to 8 to discover their potential, think
                  independently, and act with integrity in a rapidly evolving
                  world.
                </p>
              </div>
            </div>

            {/* Core Values Section */}
            <div>
              <div className="text-center mb-12">
                <Heart className="w-16 h-16 text-[#990000] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Core Values
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#990000] transition-colors duration-300"
                  >
                    <div className="text-center">
                      <value.icon className="w-12 h-12 text-[#990000] mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-[#990000] mb-4">
                  Building Tomorrow's Leaders Today
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Our vision, mission, and core values work together to create
                  an educational environment that not only prepares students
                  academically but also shapes them into compassionate,
                  responsible, and confident individuals ready to make a
                  positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mission;

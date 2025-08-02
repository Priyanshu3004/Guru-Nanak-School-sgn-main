import React from 'react'
import Layout from '../../components/Layout'
import { Building, Users, Trophy, Palette, Crown } from "lucide-react"
import Hero from '../../components/Global/Hero'

const SchoolStructure = () => {
  const academicSections = [
    {
      icon: Palette,
      title: "Pre-Primary Wing",
      subtitle: "(Pre-Nursery, L.K.G., U.K.G.)",
      description:
        "A joyful and nurturing space where children are introduced to foundational learning through play, storytelling, rhymes, drawing, and basic literacy/numeracy skills.",
    },
    {
      icon: Building,
      title: "Primary Wing",
      subtitle: "(Class I to V)",
      description:
        "Focuses on conceptual clarity, communication skills, and early subject integration. Emphasis is placed on reading, writing, arithmetic, creativity, discipline, and basic social values.",
    },
    {
      icon: Users,
      title: "Middle Wing",
      subtitle: "(Class VI to VIII)",
      description:
        "Prepares students for senior-level learning with specialised subject teachers, activity-based learning, life skills, and exposure to broader curricular areas like science, environment, languages, and mathematics.",
    },
  ]

  const houses = [
    {
      name: "Ajit Singh House",
      color: "Red",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    {
      name: "Zorawar Singh House",
      color: "Green",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      name: "Jujhar Singh House",
      color: "Blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
    {
      name: "Fateh Singh House",
      color: "Yellow",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
    },
  ]
  return (
    <>
    <Layout>
<div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#990000] text-white py-16 hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-12 h-12 mr-4" />
            <h1 className="text-3xl sm:text-4xl font-bold">School Structure</h1>
          </div>
        </div>
      </div>
<Hero title={"School Structure"} icon={<Building className="w-12 h-12 mr-4 text-white" />}/>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Shri Guru Nanak Doon Vale School follows a structured and student-centric academic model that caters to the
            overall growth and development of children from Pre-Nursery to Class VIII. As a co-educational school in
            Dehradun, we ensure an inclusive and equal environment for all students.
          </p>
        </div>

        {/* Academic Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#990000] mb-8 text-center">Academic Sections</h2>

          <div className="space-y-8">
            {academicSections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <section.icon className="w-12 h-12 text-[#990000] mr-6 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{section.title}</h3>
                    <p className="text-[#990000] font-semibold mb-4">{section.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* House System */}
        <div>
          <div className="text-center mb-12">
            <Crown className="w-16 h-16 text-[#990000] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#990000] mb-4">House System</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To promote leadership, discipline, teamwork, and healthy competition, the school follows a Four-House
              System:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {houses.map((house, index) => (
              <div key={index} className={`${house.bgColor} ${house.borderColor} border-2 p-6 rounded-lg text-center`}>
                <Trophy className={`w-12 h-12 mx-auto mb-4 ${house.textColor}`} />
                <h3 className={`text-xl font-bold ${house.textColor} mb-2`}>{house.name}</h3>
                <p className={`${house.textColor} font-medium`}>({house.color})</p>
              </div>
            ))}
          </div>

          <div className="bg-[#990000] text-white p-8 rounded-lg">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">House Activities</h3>
              <p className="leading-relaxed">
                Each student is assigned to one of the houses and participates in inter-house competitions,
                celebrations, and school events throughout the academic year. This system fosters a strong sense of
                identity and community spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default SchoolStructure
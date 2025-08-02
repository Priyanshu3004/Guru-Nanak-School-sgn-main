import React from 'react'
import { Building2, BookOpen, Mic, Trophy, Shield, Clock, AlertTriangle } from "lucide-react"
import Hero from '../../components/Global/Hero'
import Layout from '../../components/Layout'

const Facilities = () => {
  const academicFacilities = [
    {
      icon: Building2,
      title: "Well-Ventilated Classrooms",
      description: "Spacious, well-lit, and furnished with age-appropriate seating.",
    },
    {
      icon: BookOpen,
      title: "Qualified Faculty",
      description: "Dedicated teachers who use activity-based and child-friendly teaching techniques.",
    },
    {
      icon: Mic,
      title: "English Language Focus",
      description: "Children are encouraged to converse in English to build confidence and fluency.",
    },
    {
      icon: BookOpen,
      title: "Library Access",
      description: "Books available for various age groups to promote reading habits (available at higher grades).",
    },
    {
      icon: Trophy,
      title: "Curriculum-Aligned Learning",
      description: "Following a structured curriculum designed to meet developmental needs at every stage.",
    },
  ]

  const coCurricularActivities = [
    "Annual Day Functions: Grand celebration of student talent with dance, drama, music, and skits.",
    "Cultural Activities: Folk dance, art & craft, singing, and drawing competitions.",
    "House Events: Regular inter-house quizzes, storytelling, essay writing, and elocution contests.",
    "Moral Education: Emphasis on ethical behaviour, honesty, teamwork, and respect.",
  ]

  const studentWelfare = [
    "Attendance Monitoring: Strong emphasis on punctuality and regular attendance.",
    "Discipline Framework: A respectful and structured environment maintained by staff and school leadership.",
    "Emotional Safety: Teachers are trained to observe and support students emotionally and socially.",
  ]
  return (
    <>
    <Layout>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#990000] text-white py-16 hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 mr-4" />
            <h1 className="text-3xl sm:text-4xl font-bold">Facilities</h1>
          </div>
        </div>
      </div>
      <Hero title={"Facilities"} icon={<Building2 className="w-12 h-12 mr-4 text-white" />}/>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At Shri Guru Nanak Doon Vale School, we believe that a well-rounded educational experience goes beyond
            textbooks. Our campus and infrastructure are thoughtfully designed to support both academic learning and the
            emotional, social, and creative growth of every child.
          </p>
        </div>

        {/* Academic Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#990000] mb-8 text-center">Academic Facilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFacilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <facility.icon className="w-10 h-10 text-[#990000] mb-4" />
                <h3 className="font-bold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Curricular & Enrichment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#990000] mb-8 text-center">Co-Curricular & Enrichment</h2>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="space-y-4">
              {coCurricularActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <Trophy className="w-6 h-6 text-[#990000] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Welfare */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#990000] mb-8 text-center">Student Welfare</h2>

          <div className="bg-[#990000] text-white p-8 rounded-lg">
            <div className="space-y-4">
              {studentWelfare.map((welfare, index) => (
                <div key={index} className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <p>{welfare}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* School Schedule & Transportation */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* School Schedule */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-[#990000] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">School Schedule</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#990000] mr-3 flex-shrink-0 mt-0.5" />
                <p>Clearly structured summer and winter timings for all sections from Pre-Nursery to Class VIII.</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#990000] mr-3 flex-shrink-0 mt-0.5" />
                <p>Early finish timings for younger classes to ensure comfort and attention span alignment.</p>
              </div>
            </div>
          </div>

          {/* Transportation Note */}
          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <div className="text-center mb-6">
              <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Note on Transportation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The school does not provide transportation services. Parents are encouraged to drop and pick up their
              children directly, ensuring their safety and punctuality.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout></>
  )
}

export default Facilities
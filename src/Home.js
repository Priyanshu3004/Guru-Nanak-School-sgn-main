import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import MoreAbout from "./components/MoreAbout";
import AdmissionInfo from "./components/AdmissionInfo";
import BeyonAcademy from "./components/BeyonAcademy";
import SimilarSchool from "./components/SimilarSchool";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Faqs from "./components/Faqs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Layout>
        <Hero />
        <MoreAbout />
        <AdmissionInfo />
        {/* <BeyonAcademy /> */}
        {/* <SimilarSchool /> */}
        <Testimonials />
        {/* <Faq /> */}
        <Faqs />
      </Layout>
    </div>
  );
}

export default Home;

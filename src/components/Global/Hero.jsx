import { Landmark } from "lucide-react";
import React from "react";

const Hero = ({ title, icon, isIcon = true, src }) => {
  return (
    <>
      <section className="relative h-[60vh] w-full">
        <img
          src={src || "img/school_hor-2.JPG"}
          alt="School heritage"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
          {isIcon &&
            (icon ? icon : <Landmark className="text-white w-12 h-12 mb-4" />)}

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center">
            {title || "Our History"}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;

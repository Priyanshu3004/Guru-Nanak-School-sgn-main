import { Link } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <div>
      <div className="background1 my-[72px] md:my-[64px]">
        <section className="overlay">
          <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-52 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
                <h1 className="title-font sm:text-6xl text-5xl md:text-7xl mb-4 text-left  font-bold text-white hero___mobile">
                  SHRI GURU NANAK DOON VALE
                  <br className="hidden lg:inline-block" /> SCHOOL
                </h1>
                <p className="mb-8 leading-relaxed text-white text-2xl text-left">
                  Know about S.G.N Doon Vale School
                </p>
                <Link to="/our-history">
                  <div className=" ">
                    <button className=" text-white bg-[#FFA700]  border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                      Know more
                    </button>
                  </div>
                </Link>
              </div>
              <div
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-[#ecb5b547] p-5 rounded-2xl border-2 form__mobile "
                style={{
                  backdropFilter: "blur(5px)",
                }}
              >
                <form
                  class="kwes-form"
                  action="https://kwesforms.com/api/foreign/forms/g7wMYnSFcQYOQ92vik9y"
                  method="POST"
                >
                  <div className=" text-center">
                    <h1 className=" my-5 text-white md:text-[#03001B] font-bold text-2xl">
                      APPLY FOR ADMISSIONS{" "}
                    </h1>
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="Name"
                      className="bg-[#f1f2f6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#990000] focus:border-[#990000] block w-full p-2.5  dark:focus:ring-[#990000] dark:focus:border-[#990000] input__mobile"
                      placeholder="Name"
                      required
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://mayogirlssadmission.com/thanks"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="Class"
                      className="bg-[#f1f2f6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#990000] focus:border-[#990000] block w-full p-2.5  dark:focus:ring-[#990000] dark:focus:border-[#990000] input__mobile"
                      placeholder="Class"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="PhoneNumber"
                      className="bg-[#f1f2f6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#990000] focus:border-[#990000] block w-full p-2.5  dark:focus:ring-[#990000] dark:focus:border-[#990000] input__mobile"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className=" text-center">
                    <button
                      type="Submit"
                      className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center   btn__mobile"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import "../App.css";
export default function Faqs() {
  return (
    <div className="bg-[#990000] p-5">
      <div className="w-full px-4">
        <div className="  ">
          <h1 className=" font-bold text-3xl  text-white  mx-[6px]">FAQ</h1>
        </div>
        <div className="mx-auto w-full rounded-2xl  p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    {" "}
                    What classes does Shri Guru Nanak Doon Vale School offer?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-white bg-[#FFA700] ">
                  We offer structured education from Pre-Nursery to Class VIII
                  in a co-educational environment.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Is the school affiliated with any board?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                  <h1 className=" font-bold">
                    No, Shri Guru Nanak Doon Vale School isn't affiliated with
                    CBSE, yet it ensures quality education through its own
                    enriched academic program.
                  </h1>
                  {/* <ul className="list-decimal mx-8">
                  <li>Fill out a registration form.</li>
                  <li>Document verification will decide if you are eligible or not.</li>
                  <li>You will have to take an aptitude test, usually held in the 3rd week of November.</li>
                  <li>Upon passing the test, you will be accepted into the school.</li>
                </ul> */}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What are the school timings?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                  <h1 className=" font-bold">
                    School timings vary by class and season. Summer and winter
                    timings are clearly communicated at the start of each term.
                  </h1>
                  {/* <ul className="list-decimal mx-8">
                  <li>For Indian- Rs.8,01,000</li>
                  <li>For Overseas- Rs. 16,02,000</li>
                </ul> */}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Does the school provide transport facilities?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                  No, the school does not offer transportation services. Parents
                  are requested to personally drop and pick up their children.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span> What co-curricular activities are offered?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                  <h1 className=" font-bold">
                    We offer a wide range of activities including dance, music,
                    drawing, storytelling, cultural programs, and
                    inter-house competitions.
                  </h1>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

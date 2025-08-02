import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const aboutMenu = [
    { title: "About", link: "/about" },
    { title: "Our History", link: "/our-history" },
    { title: "Secretary Message", link: "/Secretary-message" },
    {
      title: "Vision Mission & Core Values",
      link: "/vision-mission-core-values",
    },
    // { title: "Facilities", link: "/facilities" },
    { title: "School Structure", link: "/school-structure" },
    {
      title: "Mandatory Public Disclosure",
      link: "/Mandatory-public-disclosure",
    },
  ];

  const admissionMenu = [
    { title: "Admission", link: "/admission" },
    // { title: "Application Form", link: "/admission-form" },
    { title: "Fees Rules & Ragulations", link: "/fees-rules-ragulations" },
    { title: "TC Form", link: "/tc-form" },
    { title: "School Calender", link: "/school-calender" },
    /*{ title: "About Tradition", link: "/abouttradition" },*/
  ];

  return (
    <div>
      <nav className="bg-[#990000]  fixed top-0 w-full z-30">
        <div className=" overlayNav ">
          <div className="justify-between px-4 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8   ">
            <div className="flex md:block justify-between">
              <Link to="/">
                <div className="flex items-center  justify-between py-3 md:py-3 gap-4">
                  <img className="w-12 aspect-square" src="/image/logo.jpg" />
                  <p className="text-2xl font-medium text-white hidden md:block">
                    Shri Guru Nanak Doon Vale School
                  </p>
                </div>
              </Link>
              <div className="md:hidden flex item-center">
                <button
                  className="text-white focus:outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // Close icon
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // Hamburger icon
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    <Link to={"/"}>Home</Link>
                  </li>
                  {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a >Blog</a>
                                </li> */}
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    {/* <Link to={'/about'}>About us</Link> */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md text-white shadow-sm    ">
                          About us
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-t-4 border-[#FFA700]">
                          <div className="py-1">
                            {aboutMenu.map((item) => (
                              <>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to={item?.link}
                                      className={classNames(
                                        active
                                          ? " text-[#FFA700]"
                                          : "text-black",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item?.title}
                                    </Link>
                                  )}
                                </Menu.Item>
                              </>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    {/* <Link to={'/admission'}>Admission</Link> */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md text-white shadow-sm    ">
                          Admission
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-t-4 border-[#FFA700]">
                          <div className="py-1">
                            {admissionMenu.map((item) => (
                              <>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to={item?.link}
                                      className={classNames(
                                        active
                                          ? " text-[#FFA700]"
                                          : "text-black",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item?.title}
                                    </Link>
                                  )}
                                </Menu.Item>
                              </>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    <Link to={"/facilities"}>Facilities</Link>
                  </li>
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    <Link to={"/studentlife"}>Student life</Link>
                  </li>
                  <li className="text-gray-100 hover:text-[#FFA700]">
                    <Link to={"/contactus"}>Contact us</Link>
                    {/* <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                    Options
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Account settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Support
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    License
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <form method="POST" action="#">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        type="submit"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block w-full px-4 py-2 text-left text-sm'
                                                                        )}
                                                                    >
                                                                        Sign out
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </form>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

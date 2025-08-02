import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutLinks = [
    { title: "About", link: "/about" },
    { title: "Our History", link: "/our-history" },
    { title: "Secretary's Message", link: "/Secretary-message" },
    {
      title: "Vision Mission & Core Values",
      link: "/vision-mission-core-values",
    },
    { title: "Facilities", link: "/facilities" },
    { title: "School Structure", link: "/school-structure" },
  ];

  const admissionLinks = [
    { title: "Admission", link: "/admission" },
    { title: "Application Form", link: "/admission-form" },
    { title: "Fees Rules & Regulations", link: "/fees-rules-regulations" },
    { title: "TC Form", link: "/tc-form" },
    { title: "School Calender", link: "/school-calender" },
    { title: "Withdrawal Policy", link: "/withdrawalpolicy" },
  ];

  const quickLinks = [
    { title: "Home", link: "/" },
    { title: "Facilities", link: "/facilities" },
    { title: "Student Life", link: "/studentlife" },
    { title: "Contact Us", link: "/contactus" },
  ];
  return (
    <>
      <footer className="bg-[#990000] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center  justify-between py-3 md:py-3 gap-4">
                <img className="h-14" src="/image/logo.jpg" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Shri Guru Nanak Doon Vale School
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Established in 1989, providing quality education for over three
                decades. A trusted co-educational institution in Dehradun.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+917895336446"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    +91 7895336446
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+919927229456"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    +91 9927229456
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a
                    href="https://wa.me/+917895336446"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">
                    Dehradun, Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-200 hover:text-[#FFA700] transition-colors text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admission Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Admission</h4>
              <ul className="space-y-2">
                {admissionLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-200 hover:text-[#FFA700] transition-colors text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li key={"123"}>
                  <Link to={"/Mandatory-public-disclosure"}>
                    <a
                      // href={"/pdf/brochure.pdf"}
                      // download={"Mandatory-Public-Disclosure"}
                      className="text-gray-200 hover:text-[#FFA700] transition-colors text-sm"
                    >
                      Mandatory Public Disclosure
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links & School Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 mb-6">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-200 hover:text-[#FFA700] transition-colors text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* School Hours */}
              <div>
                <h5 className="font-semibold mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  School Hours
                </h5>
                <div className="text-sm text-gray-200 space-y-1">
                  <p>Monday - Friday</p>
                  <p>Summer: 7:30 AM - 1:30 PM</p>
                  <p>Winter: 8:30 AM - 2:30 PM</p>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="">Sgnschool555@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social Media Links */}
              <div className="mb-4 md:mb-0">
                <h5 className="font-semibold mb-3 text-center md:text-left">
                  Follow Us
                </h5>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FFA700] transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="text-center md:text-right hidden">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 rounded text-gray-800 text-sm flex-1"
                  />
                  <button className="bg-[#FFA700] hover:bg-[#FF9500] px-4 py-2 rounded text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black/20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
              <div className="mb-2 md:mb-0">
                <p>
                  &copy; 2024 Shri Guru Nanak Doon Vale School. All rights
                  reserved.
                </p>
              </div>
              {/* <div className="flex space-x-6">
                <a
                  href="/privacy-policy"
                  className="hover:text-[#FFA700] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-conditions"
                  className="hover:text-[#FFA700] transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/sitemap"
                  className="hover:text-[#FFA700] transition-colors"
                >
                  Sitemap
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

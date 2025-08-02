import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import Layout from "../components/Layout";

function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="bg-red-500 text-gray-700 min-h-screen pt-24 pb-16">
        {/* Google Maps Embed */}
        <div className="w-full">
          <iframe
            className="w-full h-96 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.49103475639237!2d78.04565483467218!3d30.30761847693226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a28a66cfdd%3A0xdeb2b41b885fc0ed!2sShri%20Guru%20Nanak%20Doon%20Valley%20School!5e0!3m2!1sen!2sin!4v1753962757624!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

        {/* Unified Contact Container */}
        <div className="flex justify-center mt-10 px-2 md:px-0">
          <div className="w-full max-w-3xl bg-gradient-to-br from-red-300 via-red-200 to- p-8 rounded-2xl shadow-2xl border border-[#0D6880] space-y-6">
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-6 h-6 text-[#0D6880] mt-1" />
              <div>
                <p className="text-lg font-semibold text-[#0D6880]">Address:</p>
                <p className="text-gray-800 leading-relaxed">
                  825W+28W, East Rest Camp, Guru Nanak Vihar, Race Course, Dehradun, Uttarakhand 248001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2">
              <Phone className="w-6 h-6 text-[#0D6880] mt-1" />
              <div>
                <p className="text-lg font-semibold text-[#0D6880]">Phone:</p>
                <p>
                  <a
                    href="https://wa.me/919927229456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9927229456
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/917895336446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 7895336446
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#0D6880] mt-1" />
              <div>
                <p className="text-lg font-semibold text-[#0D6880]">Email:</p>
                <p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sgnschool555@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Sgnschool555@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <a
                href="https://www.google.com/maps/place/Shri+Guru+Nanak+Doon+Valley+School"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#0D6880] hover:bg-[#0b5c72] text-white px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out">
                  VISIT OUR SCHOOL
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contactus;

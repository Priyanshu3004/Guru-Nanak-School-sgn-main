import DownloadButton from "../../components/Global/DownloadButton";
import Hero from "../../components/Global/Hero";
import Layout from "../../components/Layout";

const FeesRules = () => {
  return (
    <>
      <Layout>
        <div>
          <Hero title={"Fees Rules & Ragulations"} icon={" "} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="md:float-right md:w-3/6 md:ml-8 mb-6">
                  <img
                    src="img/testionialBG.jpg"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div>
                <p>
                  Fees once paid are non-refundable under any circumstances.
                </p>

                <p>
                  Students must attend school regularly and punctually. A
                  minimum attendance of 75% is required to be eligible for
                  annual examinations.
                </p>

                <p>
                  Proper school uniform is mandatory. Politeness, respect for
                  teachers, and good behaviour are expected from every student.
                  Damage to school property will be charged accordingly
                </p>

                <p>
                  Proper school uniform is mandatory. Politeness, respect for
                  teachers, and good behaviour are expected from every student.
                  Damage to school property will be charged accordingly. The
                  school reserves the right to amend rules and regulations when
                  necessary in the interest of maintaining discipline and
                  standards. We request parents to stay updated through official
                  notices and cooperate in building a positive
                  learning environment.
                </p>

                <p>
                  As we move ahead in an ever-evolving world, our goal is to
                  raise thoughtful, responsible individuals who are not only
                  well-educated but also kind, courageous, and ready to make a
                  meaningful contribution to society.
                </p>

                <p>
                  Thank you for being a part of this journey. We look forward to
                  shaping bright futures, together.
                </p>
                <div className="pt-4">
                  <DownloadButton buttonText="Fee Structure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FeesRules;

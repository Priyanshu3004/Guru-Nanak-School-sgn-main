import Layout from "../../components/Layout";

const Mandatory = () => {
  return (
    <>
      <Layout className="  ">
        <div className="mb-6">
          <div class="p-4">
            <div className="w-[80%] mx-auto mt-24">
              <h1 className="text-3xl text-bold pb-5 text-center mb-6">
                {" "}
                MANDATORY PUBLIC DISCLOSURE
              </h1>
              <p className="text-xl text-bold pb-5">1. GENRAL INFORMATION</p>
              <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300 text-sm">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border px-4 py-2 text-left">SL.NO.</th>
                      <th class="border px-4 py-2 text-left">INFORMATION</th>
                      <th class="border px-4 py-2 text-left">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="border px-4 py-2">1</td>
                      <td class="border px-4 py-2">NAME OF THE SCHOOL</td>
                      <td class="border px-4 py-2">
                        SHRI GURU NANAK DOON VALE SCHOOL
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">2</td>
                      <td class="border px-4 py-2">
                        SCHOOL CODE (IF APPLICABLE)
                      </td>
                      <td class="border px-4 py-2">273</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">3</td>
                      <td class="border px-4 py-2">
                        AFFILIATION NO. (IF APPLICABLE)
                      </td>
                      <td class="border px-4 py-2">Admin</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">4</td>
                      <td class="border px-4 py-2">
                        COMPLETE ADDRESS WITH PIN CODE
                      </td>
                      <td class="border px-4 py-2">
                        C-150-168, RACE COURSE, DEHRADUN, UTTARAKHAND - 248001
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">5</td>
                      <td class="border px-4 py-2">PRINCIPAL NAME</td>
                      <td class="border px-4 py-2">Mrs. HARVINDER KAUR</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">6</td>
                      <td class="border px-4 py-2">PRINCIPAL QUALIFICATION</td>
                      <td class="border px-4 py-2">M.A, B.Ed, M.Ed</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">7</td>
                      <td class="border px-4 py-2">SCHOOL EMAIL ID</td>
                      <td class="border px-4 py-2">sgnschool555@gmail.com</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">8</td>
                      <td class="border px-4 py-2">
                        CONTACT DETAILS (LANDLINE/MOBILE)
                      </td>
                      <td class="border px-4 py-2">9412054169</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* seconr table */}
          <div class="p-4">
            <div className="w-[80%] mx-auto mt-10">
              <p className="text-xl text-bold pb-5">2. STAFF (TEACHING)</p>
              <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300 text-sm">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border px-4 py-2 text-left">SL.NO.</th>
                      <th class="border px-4 py-2 text-left">INFORMATION</th>
                      <th class="border px-4 py-2 text-left">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="border px-4 py-2">1</td>
                      <td class="border px-4 py-2">PRINCIPAL</td>
                      <td class="border px-4 py-2">Mrs. HARVINDER KAUR</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">2</td>
                      <td class="border px-4 py-2 uppercase">
                        total no of teachers
                      </td>
                      <td class="border px-4 py-2">19</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">3</td>
                      <td class="border px-4 py-2 uppercase">TGT</td>
                      <td class="border px-4 py-2">08</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">4</td>
                      <td class="border px-4 py-2 uppercase">PRT</td>
                      <td class="border px-4 py-2">11</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">5</td>
                      <td class="border px-4 py-2">TEACHERS SECTION RATIO</td>
                      <td class="border px-4 py-2">35:1</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">6</td>
                      <td class="border px-4 py-2">
                        DETAILS OF SPECIAL EDUCATORS
                      </td>
                      <td class="border px-4 py-2">
                        <p>
                          Mrs. Ramandeep Kaur
                          <br />
                          Contact no.
                          <a className="text-blue-700" href="tel:+919927229456">
                            {" "}
                            9927229456
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">7</td>
                      <td class="border px-4 py-2">
                        DETAILS OF COUNSELLOR AND WELLNESS TEACHER
                      </td>
                      <td class="border px-4 py-2">
                        <p>
                          Mrs. Harvinder Kaur
                          <br />
                          Contact no.{" "}
                          <a
                            className="text-blue-700"
                            href="tel:+919897089269"
                            title="Call Mrs. Harvinder Kaur"
                          >
                            9897089269
                          </a>
                        </p>
                      </td>
                    </tr>
                    {/* <tr>
          <td class="border px-4 py-2">6</td>
          <td class="border px-4 py-2">PRINCIPAL QUALIFICATION</td>
          <td class="border px-4 py-2">M.A, B.Ed, M.Ed</td>
        </tr> */}
                    {/* <tr>
          <td class="border px-4 py-2">7</td>
          <td class="border px-4 py-2">SCHOOL EMAIL ID</td>
          <td class="border px-4 py-2">sgnschool555@gmail.com</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">8</td>
          <td class="border px-4 py-2">CONTACT DETAILS (LANDLINE/MOBILE)</td>
          <td class="border px-4 py-2">9412054169</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">9</td>
          <td class="border px-4 py-2">SECONDARY CONTACT EMAIL</td>
          <td class="border px-4 py-2">johndeo@gmail.com</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">10</td>
          <td class="border px-4 py-2">ALTERNATE CONTACT EMAIL</td>
          <td class="border px-4 py-2">johndeo@gmail.com</td>
        </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* third table */}
          <div class="p-4">
            <div className="w-[80%] mx-auto mt-10">
              <p className="text-xl text-bold pb-5">3. SCHOOL INFRASTRUCTURE</p>
              <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300 text-sm">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border px-4 py-2 text-left">SL.NO.</th>
                      <th class="border px-4 py-2 text-left">INFORMATION</th>
                      <th class="border px-4 py-2 text-left">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="border px-4 py-2">1</td>
                      <td class="border px-4 py-2">
                        TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)
                      </td>
                      <td class="border px-4 py-2">7023 Sq metre</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">2</td>
                      <td class="border px-4 py-2">
                        NO AND SIZE OF THE CLASS ROOMS(IN SQR MTR)
                      </td>
                      <td class="border px-4 py-2">
                        20 And Size Of Rooms 7.35m * 6.25m{" "}
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">3</td>
                      <td class="border px-4 py-2">
                        NO AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS(IN
                        SQR MTR)
                      </td>
                      <td class="border px-4 py-2">
                        04 And Size Of Lab 6.85m * 8.4m
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">4</td>
                      <td class="border px-4 py-2">INTERNET FACILITY</td>
                      <td class="border px-4 py-2">YES </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">5</td>
                      <td class="border px-4 py-2">NO.OF GIRLS TOILETS</td>
                      <td class="border px-4 py-2">6 </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">6</td>
                      <td class="border px-4 py-2">NO.OF BOYS TOILETS</td>
                      <td class="border px-4 py-2">6</td>
                    </tr>
                    {/* <tr>
          <td class="border px-4 py-2">7</td>
          <td class="border px-4 py-2">SCHOOL EMAIL ID</td>
          <td class="border px-4 py-2">sgnschool555@gmail.com</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">8</td>
          <td class="border px-4 py-2">CONTACT DETAILS (LANDLINE/MOBILE)</td>
          <td class="border px-4 py-2">9412054169</td>
        </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FOURTH TABLE */}
          <div className="p-4">
            <div className="w-[80%] mx-auto mt-10">
              <p className="text-xl text-bold pb-5">
                4. DOCUMENTS AND INFORMATION
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">SL.NO.</th>
                      <th className="border px-4 py-2 text-left">
                        INFORMATION
                      </th>
                      <th className="border px-4 py-2 text-left">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">
                        COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT
                        EXTENTION OF AFFILIATION
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Affiliation-Letter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Affiliation Letter
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">
                        COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL
                        CERTIFICATE
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Registration-Cert.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Registration Cert.
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">
                        COPIES OF NO CERTIFICATE (N.O.C) ISSUED BY THE STATE
                        GOVT./UT
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-NOC.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View NOC
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">4</td>
                      <td className="border px-4 py-2">
                        COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT,2009
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-RTE-Certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View RTE Certificate
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">5</td>
                      <td className="border px-4 py-2">
                        COPIES OF VALID BUILDING SAFETY CERTIFICATE AS PER THE
                        NATIONAL BUILDING CODE
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Building-Safety-Cert.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Building Safety Cert.
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">
                        COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE
                        COMPETENT AUTHORITY
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Fire-Safety-Cert.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Fire Safety Cert.
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">7</td>
                      <td className="border px-4 py-2">
                        COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL
                        FOR AFFILIATION
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Self-Certification.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Self Certification
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">8</td>
                      <td className="border px-4 py-2">
                        COPIES OF VALID WATER,HEALTH AND SANITATION
                        CERTIFICATION
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Water-Health-Cert.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Water & Health Cert.
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">
                        FEE STRUCTURE OF THE SCHOOL
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Fee-Structure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Fee Structure
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">10</td>
                      <td className="border px-4 py-2">
                        ANNUAL ACADEMIC CALENDER
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Academic-Calendar.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Academic Calendar
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">11</td>
                      <td className="border px-4 py-2">
                        LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-SMC-List.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View SMC List
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">12</td>
                      <td className="border px-4 py-2">
                        LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS
                      </td>
                      <td className="border px-4 py-2 text-blue-700">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-PTA-Members.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View PTA Members
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">13</td>
                      <td className="border px-4 py-2">
                        LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER
                        APPLICABILITY
                      </td>
                      <td className="border px-4 py-2 text-blue-700">
                        <a
                          className="text-blue-700"
                          href="/pdf/View-Board-Results.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Board Results
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FOURTH TABLE */}
          <div className="p-4">
            <div className="w-[80%] mx-auto mt-10">
              <p className="text-xl text-bold pb-5">
                5. MANDATORY DISCLOSURE DETAILS
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">SL.NO.</th>
                      <th className="border px-4 py-2 text-left">
                        INFORMATION
                      </th>
                      <th className="border px-4 py-2 text-left">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">
                        MANDATORY DISCLOSURE DETAILS
                      </td>
                      <td className="border px-4 py-2">
                        <a
                          className="text-blue-700"
                          href="/pdf/Mandatory-Disclosure-Details_SARAS-6.0.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mandatory Disclosure Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mandatory;

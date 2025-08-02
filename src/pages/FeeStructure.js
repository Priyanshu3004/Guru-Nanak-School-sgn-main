import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function FeeStructure() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <div className='  bg-[#990000] w-full h-[120em]  '>
                <div className='container mx-auto '>
                    <div className=' flex justify-center'>
                        <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image/Pasted Graphic 6_1.jpg" alt="image description" />
                    </div>
                </div>


                <section className="bg-white  -mt-[4em] p-10">

                    <div className="container mx-auto">
                        <h1 className=' text-2xl md:text-3xl font-bold mb-5 '>KNOW THE <span className='text-[#990000]'>FEE STRUCTURE</span> </h1>
                        <h2 className=' font-medium mb-5'>FEE STRUCTURE</h2>

                        <div className="overflow-x-auto relative">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-[#990000] ">
                                <thead className="text-xs  uppercase">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 border-2 border-[#990000]  uppercase">
                                            Particulars
                                        </th>
                                        <th scope="col" className="py-3 px-6 border-2 border-[#990000]  uppercase">
                                            Indian
                                        </th>
                                        <th scope="col" className="py-3 px-6 border-2 border-[#990000]  uppercase">
                                            Overseas
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            School Fee ( Annually )
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            8,01,000 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000]">
                                            16,02,000 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Caution Money
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            4,00,500 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            8,01,000 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Admission Fee
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            1,07,000 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            1,07,000 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            One time IT fee
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            32,400 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            32,400 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Impreset Money
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            40,000 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            40,000 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Uniform Advance
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            25,000 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            25,000 /-
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Prospectus
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            500 /-
                                            550 /- ( with postage )
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            US $20
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Registration Fee
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            21,500 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            US $1073
                                        </td>

                                    </tr>
                                    <tr className="bg-white  ">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  border-l-2 border-[#990000] ">
                                            Additional registration fee <br />
                                            ( After 30th june of the year preceeding <br />
                                            the one in which the admission is sought )
                                        </th>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            2000 /-
                                            i.e 23500 /-
                                        </td>
                                        <td className="py-4 px-6 border-l-2 border-[#990000] ">
                                            US $60
                                            i.e US $1133
                                        </td>

                                    </tr>
                                    

                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>


            </div>
        </Layout>

    )
}

export default FeeStructure
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import Faqs from 'react-faq-component';

import '../App.css'
const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}
export default function Faq() {
    return (
        <div className="bg-[#990000] p-5">
            <div className=' container mx-auto '>
                <h1 className=' font-bold text-3xl  text-white text-left mx-2 md:mx-[5px]'>FAQ</h1>
            </div>
            <div className=' container mx-auto '>
          <Faqs data={data} className='' />
        </div>
        </div>
    )
}

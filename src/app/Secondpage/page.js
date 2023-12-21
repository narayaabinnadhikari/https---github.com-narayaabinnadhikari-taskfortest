import React from 'react'

import Image from 'next/image'

import applyimage from "../Image/Applynow.png"

import Gridofsecondpage from "./Gridofsecondpage/page"

export default function Secondpage() {
  return (
    <div className="bg-slate-50 h-[1920px]">
      <div className="bg-white p-8 shadow-xl flex justify-around items-center m-24 rounded-[20px] z-10">
        <div className="flex-col w-2/4 text-black">
          <div className="text-3xl font-light">
            Ready to Transform the World?{" "}
          </div>
          <div className="py-4 text-gray-600">
            <p>Join us in creating a global community of change-makers.</p>
            <p>
            with Astronova Foundation Nepal. Shape the future!
            </p> 
          </div>
          <div>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 my-6 rounded tracking-[.25rem]">
              APPLY NOW
            </button>
          </div>
        </div>
        <Image src={applyimage} width={150} />
      </div>
      <Gridofsecondpage />
    </div>
  );
}

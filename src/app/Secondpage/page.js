import React from 'react'

import Image from 'next/image'

import applyimage from "../Image/Applynow.png"

export default function Secondpage() {
  return (
    <div className="bg-slate-50 h-[1920px]">
      <div className="bg-white flex justify-between items-center">
        <div className="flex-col">
          <div className="text-lg">Ready to Transform the World? </div>
          <div>
            Join us in creating a global community of change-makers. Shape the
            future with Astronova Foundation Nepal!
          </div>
          <div>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 my-6 rounded tracking-[.25rem]">
              APPLY NOW
            </button>
          </div>
        </div>
        <div>
          <Image src={applyimage} width={150} />
        </div>
      </div>
    </div>
  );
}

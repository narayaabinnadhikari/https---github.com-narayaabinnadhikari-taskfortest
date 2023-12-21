import React from 'react'

import Image from 'next/image';

import groupphoto from "../../Image/Groupphoto.png"

export default function Griddisplay() {
  return (
    <div className="grid grid-cols-2 gap-4 p-10 m-10 text-black">
      <div className="p-4 flex-col w-2/3">
        <h2 className='font-semibold text-2xl p-2'>Student Ambassador Program</h2>
        <p className='p-2'>
          Welcome to the transformative journey with The Astronova Foundation
          Nepal’s Student Ambassador Program (SAP). This unique program is
          designed to empower school and university students to make a real
          impact on the world while enhancing their own skills and experiences.
        </p>
      </div>
      <div className="p-4">
        <Image src={groupphoto} className="rounded-[20px]" />
      </div>

      <div className="col-span-2  p-4">
        <p>This div is in the second row.</p>
      </div>

      <div className="col-span-2  p-4">
        <p>This div is in the third row.</p>
      </div>
      <div className="col-span-2  p-4">
        <p>This div is in the fourth row.</p>
      </div>
    </div>
  );
}

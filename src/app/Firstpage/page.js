import React from "react";
import Image from "next/image";
import background from "../Image/Background01.png";

export default function Firstpage() {
  return (
    <div>
      <div className="relative">
        <Image src={background} width={1920} />
        <div className="absolute top-2 left-2 bg-opacity-50 flex justify-start items-start text-black px-2 py-2">
          <div className="flex-col px-12 py-6">
            <div className="font-bold text-base px-2 py-0">
              Astronova Foundation Nepal
            </div>
            <div className="font-semibold text-2xl px-2 py-2">
              Student Ambassador Program
            </div>
            <div className="font-bold text-3xl px-2 py-6">
              Application For 2023
            </div>
            <div className="w-1/3 text-base px-2 py-2">
              The Astronova Foundation Nepal’s Student Ambassador Program (SAP)
              invites school and university students to embark on a
              transformative journey. As a Student Ambassador, you'll represent
              the foundation, embody its spirit, and engage in a range of
              activities. This volunteer position offers a unique opportunity to
              enhance leadership, interpersonal, and communication skills while
              contributing to real-life problem-solving.
            </div>
            <div>
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 my-6 rounded tracking-[.30rem]">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

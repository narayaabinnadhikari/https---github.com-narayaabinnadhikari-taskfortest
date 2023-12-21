import React from "react";
import Image from "next/image";

import companyLogo from '../Image/Logo.png';

export default function Navbar() {
  return (
    <div className="flex space justify-between bg-slate-50 px-24">
      <div>
        <Image src={companyLogo} width={250} height={180} />
      </div>
      <div className="flex  space-x-10 pl-10 pr-4 text-black place-items-center	">
        <div className=" hover:bg-slate-200">About Us</div>
        <div className=" hover:bg-slate-200">Our Work</div>
        <div className=" hover:bg-slate-200">Get Involved </div>
        <div className=" hover:bg-slate-200"> Training Department</div>
        <div className=" hover:bg-slate-200"> Projects</div>
        <div className=" hover:bg-slate-200">Blogs</div>
      </div>
      <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 my-6 rounded tracking-widest ">
        DONATE
      </button>
    </div>
  );
}

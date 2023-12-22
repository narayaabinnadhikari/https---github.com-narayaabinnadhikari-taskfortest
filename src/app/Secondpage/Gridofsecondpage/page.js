import React from "react";

import Image from "next/image";

import groupphoto from "../../Image/Groupphoto.png";

export default function Griddisplay() {
  return (
    <div className="grid grid-cols-2 gap-4 p-10 m-10 text-black">
      <div className="p-4 flex-col w-2/3">
        <h2 className="font-semibold text-2xl p-2">
          Student Ambassador Program
        </h2>
        <p className="p-2">
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
        <h2 className="font-semibold text-2xl p-2">About the Program: </h2>
        <p className="p-2">
          {" "}
          As a Student Ambassador, you'll have the opportunity to: Represent the
          Foundation: Become the face of The Astronova Foundation Nepal,
          embodying its spirit and values in your community and beyond. Engage
          in Meaningful Activities: Participate in a variety of activities
          designed to foster personal and professional growth. From community
          outreach to collaborative projects, you'll be at the forefront of
          positive change. Develop Leadership Skills: Hone your leadership
          abilities by taking on responsibilities that contribute to real-life
          problem-solving and social impact.
        </p>
      </div>

      <div className="col-span-2  p-4">
        <h2 className="font-semibold text-2xl p-2">Why Join SAP ? </h2>
        <p className="p-2">
          Unique Learning Experience: Gain hands-on experience in leadership,
          communication, and interpersonal skills. Contribute to Positive
          Change: Be part of a community that actively works towards solving
          real-world problems and making a difference. Networking Opportunities:
          Connect with like-minded individuals, mentors, and professionals who
          share your passion for positive change.{" "}
        </p>
      </div>
      <div className="col-span-2  p-4">
        <h2 className="font-semibold text-2xl p-2"> How to Apply</h2>
        <p className="p-2">
          {" "}
          Eligibility: [Specify eligibility criteria, if any] Application
          Process: [Outline the steps involved in applying for the program]
          Selection Criteria: [Highlight the qualities you are looking for in a
          Student Ambassador]
        </p>
      </div>
    </div>
  );
}

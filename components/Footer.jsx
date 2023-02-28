import React from "react";
import {GrFacebookOption} from "react-icons/gr"
import {FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa"
import {BsYoutube, BsPencilSquare} from "react-icons/bs"
import {MdNotifications} from "react-icons/md"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2D2D2D] md:px-3 border-t-2 border-white py-5">
        <div className="max-w-[87rem] mx-auto ">
          <div className="grid grid-cols-4 text-white md:grid-cols-1">
            <div className=" space-y-8">
              {/* First Div */}
              <div className="flex items-center">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 128 128"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--noto"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z"
                    fill="#ffffff"
                  />
                </svg>
                <svg
                  className="-ml-5"
                  width="50px"
                  height="40px"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--emojione-monotone"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill-rule="evenodd">
                    <path
                      d="M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065"
                      fill="#ffffff"
                    ></path>

                    <ellipse
                      cx="30.515"
                      cy="55.567"
                      rx="6.532"
                      ry="6.433"
                      fill="#ffffff"
                    ></ellipse>
                  </g>
                </svg>
              </div>
              <div className="text-lg">
                <p>Aalto University</p>
                <p>P.O. Box 11000 (Otakaari 1B)</p>
                <p>Fl-00076 AALTO</p>
                <p> Switchboard: +358 9 47001</p>
              </div>
              <div>
                <h1 className="text-white text-xl">Follow Us:</h1>
                 <div className="flex  mt-3">
                 {[<GrFacebookOption  className="text-lg"/>,<FaLinkedinIn  className="text-lg"/>,<FaTwitter  className="text-lg"/>,<FaLinkedinIn  className="text-lg"/>,<FaInstagram  className="text-lg"/>,<BsYoutube  className="text-lg"/>,<MdNotifications  className="text-lg"/>,<BsPencilSquare  className="text-lg"/>].map((val,idx) => {
                   return (
                      <div className="hover:bg-[#4a4a4a] p-2 rounded-full">
                        {val}
                      </div>
                   )
                })}
                 </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 pb-7 content-start md:grid-cols-1">
              {[
                {
                  title: "Quicklinks",
                  desc: [
                    "Research and artistic outputs",
                    "Library — Learning Centre",
                    "admissions",
                    "alumni",
                    "media",
                    "It Services",
                    "Open University",
                    "Aalto university Shop",
                  ],
                },
                {
                  title: "Contact",
                  desc: ["campusmaps", "contact-Information"],
                },
                {
                  title: "Latest",
                  desc: ["news", "events", "oareers"],
                },
                {
                  title: "For Students",
                  desc: [
                    "for Students",
                    "student guides",
                    "webmail",
                    "mycourses",
                    "mystudies",
                    "sisu",
                  ],
                },
              ].map((value, index) => {
                return (
                  <div key={index} className={`flex items-start flex-col ${index === 3? '-mt-32 md:-mt-0':'mt-0'} `}>
                    <h1 className={` ${index === 2?'mt-6':''} text-[1.4rem] font-semibold`}>{value.title}</h1>
                    <div className="mt-1 ">
                    {value.desc.map((v, e) => {
                      return (
                        <h1 key={e} className="underline hover:bg-[#4a4a4a] cursor-pointer self-start capitalize">
                          {v}
                        </h1>
                      );
                    })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-white space-y-5">
              <h1 className="text-2xl font-semibold">Together towards a better world.</h1>
              <p>
                Support new ideas, research, work and leadership development
                towards a stronger Finland.
              </p>
              <button className="border hover hover:border-blue-700 hover:bg-blue-700 hover:text-white bg-[#FFFFFF] border-white py-1 px-7 rounded-full text-gray-800 ">
              Donate to Aalto University
              </button>
            </div>
          </div>
          <div className="border-t-2 border-white py-6 text-white flex justify-between md:flex-col mt-4">
            <div className="flex  md:flex-col gap-4">
              {["Privacy notice", "Cookie policy", "FeedbaqK", "Accessibility statement", "Cookie settings"].map(
                (item, i) => {
                  return <h1 className="capitalize hover:bg-[#4a4a4a] cursor-pointer  underline
                  " key={i}>{item}</h1>;
                }
              )}
            </div>
            <div className="flex gap-4 md:flex-col">
              {["suomeksi", "svenska", "english"].map(
                (item, i) => {
                  return <h1 className="capitalize hover:bg-[#4a4a4a] cursor-pointer  underline
                  " key={i}>{item}</h1>;
                }
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

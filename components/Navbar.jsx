import { delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { VscClose } from "react-icons/vsc";
import { ImQuotesRight } from "react-icons/im";
import Link from "next/link";

export default function Navbar() {
  const [hidde, setHide] = useState(true);
  const [hide, setHide2] = useState(false);
  const [show, setShow] = useState(false);
  const [showSvg1, setShowSvg1] = useState(true);

  const whenScroll2 = () => {
    if (window.scrollY >= 300) {
      setHide2(true);
    } else {
      setHide2(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("scroll", whenScroll2);
    return () => {
      document.removeEventListener("scroll", whenScroll2);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [show]);

  const whenScroll = () => {
    if (window.scrollY >= 20) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", whenScroll);
  }, []);

  const handClick = () => {
    setShow(show === false ? true : false);
  };
  return (
    <>
      <section className="bg-[#2D2D2D] md:hidden  z-50 top-0 right-0 left-0 fixed w-full  border-b border-white">
        <motion.div
          animate={{ paddingBlock: hidde ? "17.6px" : "5px" }}
          transition={{
            duration: 0.3,
          }}
          className={`max-w-[86rem] mx-auto py-[1.1rem]  flex-wrap flex justify-between items-center text-white`}
        >
          {/* First Div */}
          <div>
            <Link href="/">
              <div
                onMouseEnter={() => setShowSvg1(false)}
                onMouseLeave={() => setShowSvg1(true)}
                className="flex items-center cursor-pointer"
              >
                <motion.svg
                  animate={{
                    width: hidde ? "63px" : "30px",
                    height: hidde ? "63px" : "30px",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  width="63px"
                  height="63px"
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
                </motion.svg>
                {showSvg1 ? (
                  <motion.svg
                    animate={{
                      width: hidde ? "55px" : "30px",
                      height: hidde ? "60px" : "26px",
                      marginLeft: hidde ? "-20px" : "-10px",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="-ml-5 mt-1"
                    width="55px"
                    height="60px"
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
                  </motion.svg>
                ) : (
                  <ImQuotesRight
                    className={`${
                      hidde ? "text-3xl -mt-5 -ml-3" : "text-sm -mt-3"
                    } transition-all duration-300 delay-500 `}
                  />
                )}
              </div>
            </Link>
            <div
              // onMouseEnter={() => setShowSvg1(false)}
              // onMouseLeave={() => setShowSvg1(true)}
              className="cursor-pointer"
            >
              <motion.p
                initial={{ fontSize: hidde ? 12 : 6 }}
                className={`"text-xs ${hidde ? "block" : "hidden"}`}
              >
                Aalto University
              </motion.p>
            </div>
          </div>
          {/* second div */}
          <div className="flex items-center gap-10 flex-wrap">
            <div className="flex flex-wrap gap-12 border-r border-white pr-12">
              {[
                {
                  title: "For personnel",
                  svg: (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-lock"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </motion.svg>
                  ),
                },
                {
                  title: "Support us",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ),
                },
              ].map((e, idx) => {
                return (
                  <div className="flex hover:bg-[#4a4a4a] cursor-pointer px-1 items-center gap-1">
                    <div>{e.svg}</div>
                    <p>{e.title}</p>
                  </div>
                );
              })}
            </div>
            {/* first inside */}
            <div className="flex flex-wrap gap-10  pl-2">
              {[
                {
                  title: "EN",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  ),
                },
                {
                  title: "Search",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  ),
                  icon: "",
                },
                {
                  title: "Menu",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-menu"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  ),
                  icon: "",
                },
              ].map((e, idx) => {
                return (
                  <div
                  onClick={idx === 2 ? handClick : undefined}
                    key={idx}
                    className={`flex gap-[0.35rem] cursor-pointer hover:bg-[#4a4a4a] px-1 ${
                      idx === 2 ? (show ? "hidden" : "block") : ""
                    } items-center`}
                  >
                    <div>{e.svg}</div>
                    <p>{e.title}</p>
                    <div>{e.icon}</div>
                  </div>
                );
              })}
            </div>
            {show && (
              <div
                className="flex  border-b-2 bg-[#4a4a4a]  pb-1 items-center cursor-pointer"
                onClick={handClick}
              >
                <VscClose className="text-lg stroke-white" />
                <p className="text-sm">Close Menu</p>
              </div>
            )}
            <button className="border hover:bg-blue-700 hover:border-blue-700 hover:text-white border-white py-[0.40rem] bg-white text-gray-800 px-8 rounded-full">
              Log in
            </button>
          </div>
        </motion.div>
      </section>

      {/* Mobile navigation */}
      {!hide && (
        <section className="bg-[#2D2D2D] z-50 top-0 right-0 left-0 fixed   hidden md:block  border-b border-white">
          <div className="py-[1.1rem] px-5 flex-wrap flex justify-between items-center text-white">
            {/* First Div */}
            <div>
              <div className="flex items-center">
                <svg
                  width="24px"
                  height="24px"
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
                  className="-ml-2 mt-1"
                  width="24px"
                  height="24px"
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
            </div>
            {/* second div */}
            <div className="flex items-center gap-10 flex-wrap">
              {/* first inside */}
              <div className="flex flex-wrap items-center gap-10  pl-2">
                {[
                  {
                    title: "Menu",
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-search"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    ),
                    icon: "",
                  },
                ].map((e, idx) => {
                  return (
                    <div key={idx} className="flex gap-[0.35rem] items-center ">
                      <div className={`pr-2`}>{e.svg}</div>
                      <p className="border-white border-l-2 pl-2">{e.title}</p>
                      <div>{e.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
      {show && <Modal handClick={handClick} hidde={hidde} />}
    </>
  );
}

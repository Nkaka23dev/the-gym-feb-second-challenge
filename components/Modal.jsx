import { motion } from "framer-motion";
import React from "react";

export default function Modal() {
  return (
    <section className="h-screen fixed grid z-50 inset-0 border-t-2 border-white top-28">
      <motion.div initial={{ w: 0,x: '100vw'}}
        transition={{ duration: 0.2}}
        animate={{ w: '100%', x:0 }} className="bg-slate-300 opacity-80  fixed inset-0 top-28"></motion.div>
      <motion.div
        initial={{ w: 0,x: '100vw'}}
        transition={{ duration: 0.2}}
        animate={{ w: '100%', x:0}}
        className="max-w-[86rem] z-50 bg-[#2D2D2D] px-20 ml-auto w-full text-white"
      >
        <div className=" flex justify-between items-center">
          <div className="flex gap-3 py-7">
            {[1, 2, 3, 4].map((e, idx) => {
              return (
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21,11H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM4,21h7V13H3v7A1,1,0,0,0,4,21Zm16,0a1,1,0,0,0,1-1V13H13v8Z" />
                  </svg>
                  <h1>Service</h1>
                </div>
              );
            })}
          </div>
          <div>
            Aalto community members please logjn to see internal content
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, idx) => {
          return (
            <motion.div initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.04 }} className="hover:bg-black hover:opacity-70">
              <div className="flex justify-between cursor-pointer border-t-2 py-6  border-white">
                <h1 className="text-2xl ">Admissions and applying</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

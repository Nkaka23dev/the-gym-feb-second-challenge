import { motion } from "framer-motion";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineMenuUnfold, AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import { SlExclamation } from "react-icons/sl";
import ModalMenu from "./ModalMenu";
import Link from "next/link";

export default function Modal({handClick, hidde}) {
  const [selected, setSelected] = useState(null);

  const handleClick = (idx) => {
    setSelected(selected === idx ? null : idx);
  };
  return (
    <section className={`h-screen fixed grid z-50 inset-0 border-t-2 border-white ${hidde?'top-28':'top-12'} `}>
      <div className="overflow-y-auto  relative">
        <motion.div
          onClick={handClick}
          initial={{ w: 0, x: "100vw" }}
          transition={{ duration: 0.2 }}
          animate={{ w: "100%", x: 0 }}
          className={`bg-slate-300 opacity-80  fixed inset-0 ${hidde?'top-28':'top-12'}`}
        ></motion.div>
        <motion.div
          initial={{ w: 0, x: "100vw" }}
          transition={{ duration: 0.2 }}
          animate={{ w: "100%", x: 0 }}
          className="max-w-[86rem] z-50 bg-[#2D2D2D]  px-20 ml-auto w-full text-white"
        >
          <div className=" flex justify-between items-center">
            <div className="flex gap-7 py-7">
              {[
                {
                  title: "Services",
                  icon: <AiOutlineMenuUnfold className="text-4xl" />,
                },
                {
                  title: "Sites inex",
                  icon: <TfiMenuAlt className="text-4xl" />,
                },
                {
                  title: "Students Guide",
                  icon: <GiGraduateCap className="text-4xl" />,
                },
                {
                  title: "Apply to Aalta",
                  icon: <HiOutlinePencilSquare className="text-4xl" />,
                },
              ].map((e, val) => {
                return (
                  <Link href={e.title} className="hover:bg-[#4a4a4a] px-4">
                    <div className="cursor-pointer text-white flex flex-col items-center">
                    {e.icon}
                    <h1 className="max-w-[5rem] text-center text-sm">
                      {e.title}
                    </h1>
                  </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-1 items-center">
              <SlExclamation />
              Aalto community members please login to see internal content
            </div>
          </div>
          {[
            "Admissions and applying",
            "News and events",
            "Research and art",
            "For students",
            "Schools and departments",
            "Tools",
            "About us",
            "Collaboration",
          ].map((e, idx) => {
            return (
              <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.04 }}
                className={`hover:bg-[#4a4a4a]`}
              >
                <div  onClick={() => handleClick(idx)} className={`flex justify-between cursor-pointer border-t-2 py-6 delay-150 ${selected === idx?'border-l-4 border-white':''}  border-white px-3 `}>
                  <h1
                    className="text-xl font-semibold "
                  >
                    {e}
                  </h1>
                  {selected !== idx && <AiOutlinePlus className="text-3xl" />}
                  {selected === idx &&  <AiOutlineMinus className="text-3xl"/>}
                </div>
              </motion.div>
              {selected === idx &&  <ModalMenu/>}
              </>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";

export default function Links() {
  return (
    <>
      {/* section with yello icons */}
      <section className="bg-[#2D2D2D] md:-mt-60 md:pt-80 -mt-20 pb-28 pt-40">
        <div className="text-white space-y-7">
          <div className="text-center text-2xl tracking-wide">
            Important quicklinks
          </div>
          <div className="max-w-6xl  mx-auto md:flex-col flex justify-between md:justify-center">
            {[
              {
                title: "Aalto Handbook",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="46"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit-2"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                ),
              },
              {
                title: " Aalto Handbook",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-folder"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
              {
                title: "Aalto Handbook",
                svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ),
              },
            ].map((e, idx) => {
              return (
                <div key={idx} className="flex md:mt-6 md:m-auto items-center gap-2">
                  <div className="bg-[#FFCD00] md:p-3 p-5 rounded-full fill-black text-black">
                    <div>{e.svg}</div>
                  </div>
                  <h1 className="text-xl">{e.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

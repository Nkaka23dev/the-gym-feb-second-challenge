import React from "react";

export default function Reasearch() {
  return (
    <>
      {/* section following hero icons */}
      <section className="bg-[#252525] px-4 text-white py-20">
        <div className="max-w-[87rem] mx-auto flex md:flex-col justify-between items-center text-white">
          <div className="space-y-4">
            <h1 className="text-3xl tracking-wide">
            Read about our research and donate
            </h1>
            <p className="max-w-4xl text-lg">
              At Aalto University, we create the conditions for innovation,
              economic growth, employment and wellbeing. A gift to the
              university is an investment in a better future.
            </p>
          </div>
        </div>
        <div className="max-w-[87rem]  mx-auto grid grid-cols-2 gap-5 md:grid-cols-1 pt-5 ">
          {[
            {
              img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1800w_783h_d/public/2018-06/sensual-mathematics-exhibition-by-henri-vogt_11_0.jpg?h=b2774bcf&itok=u08Vfvw4",
              text: [
                "Give for the future",
                "Our research focuses on seven key areas combining four core competences in the field ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health.",
              ],
            },
            {
              img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2021-10/Unto_Rautio_Aalto_UNT6810.jpg?h=ca5d94f6&itok=1dakSrwz",
              text: [
                "Research & Art",
                "Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health.",
              ],
            },
          ].map((e, idx) => {
            return (
              <div key={idx} className="text-white">
                <img
                  class="object-cover object-center aspect-video h-80 w-full"
                  src={e.img}
                  alt=""
                  className="mb-3"
                />
                <div className="">
                  <div className="py-7 px-6">
                    {[
                      e.text.map((e, idx) => {
                        return (
                          <div className="">
                            <p
                              className={`${idx === 0 ? "text-xl" : "mt-4"}`}
                            >
                              {e}
                            </p>
                          </div>
                        );
                      }),
                    ]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

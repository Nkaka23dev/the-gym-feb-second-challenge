import React from 'react'

export default function Compus() {
  return (
    <>
     {/* section following hero icons */}
     <section className="bg-[#2D2D2D]  pb-20 px-4">
          <div className='max-w-[87rem]  mx-auto '>
            {[
              {
                title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o",
                link: [
                  { tit: "Campus - lively and thriving", desc: [] },
                  
                  { tit: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.", desc: [] },
                  { tit: "", desc: ["Explore our vibrant innovation ecosystem", "Explore our campus", "Book a space"] }
                ]
              },
              {
                title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2", link: [
                  { tit: "Campus - lively and thriving", desc: [] },
                  { tit: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.", desc: [] },
                  { tit: "", desc: ["Visit the tour z"] }
                ]
              },
            ].map((e, idx) => {
              return (
                <div key={idx} className='grid grid-cols-2 md:grid-cols-1 gap-10'>
                  <div className={`${idx === 1 ? "order-2" : "md:order-1"} self-center text-white`}>
                    <img class="w-full md:aspect-video h-full object-cover object-center" src={e.title} alt="" />
                  </div>
                  <div className={`self-center text-white`}>
                    {e.link.map((value, index) => {
                      return (
                        <div key={index}>
                          <p className={`${index === 0?'text-3xl mb-5':'text-lg'}`}>{value.tit}</p>
                         <div className='mt-5 space-y-4'>
                         {value.desc.map((v, r) => {
                            return (
                                <div key={r} className="flex -ml-2 gap-1 items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30px"
                                  height="20px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M20 12L4 12"
                                    stroke="#ffffff"
                                    stroke-width="2.3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6"
                                    stroke="#ffffff"
                                    stroke-width="2.3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                 <p className='text-lg underline'>{v}</p>
                              </div>
                            )
                          })}
                         </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
    </>
  )
}

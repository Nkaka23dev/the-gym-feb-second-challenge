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
                  { tit: "", desc: ["Explore our vibrant innovation ecosystem", "Explore our campus", "Book a space"] }
                ]
              },
            ].map((e, idx) => {
              return (
                <div key={idx} className='grid grid-cols-2 md:grid-cols-1 gap-10'>
                  <div className={`${idx === 1 ? "order-2" : ""} self-center text-white`}>
                    <img class="w-full h-full object-cover object-center" src={e.title} alt="" />
                  </div>
                  <div className={`self-center text-white`}>
                    {e.link.map((value, index) => {
                      return (
                        <div key={index}>
                          <p>{value.tit}</p>
                          {value.desc.map((v, r) => {
                            return (
                              <p key={r}>{v}</p>
                            )
                          })}
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

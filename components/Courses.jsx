import React from 'react'

export default function Courses() {
  return (
   <>
       {/* section following hero icons */}
       <section className="bg-[#252525] px-4 text-white py-20">
          <div className="max-w-[87rem] mx-auto flex md:flex-col justify-between items-center text-white">
            <div className='space-y-4'>
              <p className='text-lg'>Find more current news and interesting events on the News and events page.</p>
            </div>
          </div>
          <div className='max-w-[87rem]  mx-auto grid grid-cols-3 gap-5 md:grid-cols-1 pt-5 '>
            {[
              {
                img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
                text: ["Shrinking from the heat",
                  "Reactive fabrics respond to changes in temperature"]
              },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

            ].map((e, idx) => {
              return (
                <div className='text-white'>
                  <img class="object-cover object-center aspect-square h-56 w-full" src={e.img} alt="" className='mb-3' />
                  <div className=''>
                    <p>School of Arts, Design and Architecture</p>
                    <p>The School of Arts, Design and Architecture is one of the...</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section> 

   </>
  )
}

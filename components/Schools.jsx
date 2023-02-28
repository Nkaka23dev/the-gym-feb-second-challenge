import React from 'react'

export default function Schools() {
  return (
    <>
     {/* section following hero icons */}
     <section className="bg-[#2D2D2D]  pb-20 px-4 text-white">
          <div className="max-w-[85rem] mx-auto flex md:flex-col justify-between items-center text-white">
            <div className='space-y-4'>
              <h1 className='text-[1.86rem]'>Explore our six schools</h1>
              <p className='text-lg'>Scientific research and artistic activities are carried out at six schools and their departments and units.</p>
            </div>
          </div>
          <div className='max-w-[85rem]  mx-auto grid grid-cols-2 md:gap-0 gap-5 md:grid-cols-1 pt-5 '>
            {[
              {
                title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
                link: ["Shrinking from the heat",
                  "Reactive fabrics respond to changes in temperature"]
              },
              { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

              { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

              { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

            ].map((e, idx) => {
              return (
                <div className='text-white border-2 grid items-end border-white grid-cols-4'>
                  <div className='px-7 md:px-3 mt-5 space-y-2 md:space-y-0 col-span-3 py-7 md:py-0'>
                    <p className='text-xl md:text-xl'>School of Arts, Design and Architecture</p>
                    <p className='text-md md:hidden'>The School of Arts, Design and Architecture is one of the...</p>
                  </div>
                  <img class="w-64 md:w-32 md:h-24 h-full object-cover object-center aspect-square" src={e.title} alt="" className='mb-3 md:mb-0' />
                </div>
              )
            })}
          </div>
        </section>
    </>
  )
}

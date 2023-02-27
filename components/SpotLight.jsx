import React from 'react'

export default function SpotLight() {
  return (

     <section className="bg-[#2D2D2D] pb-20 px-4">
     <div className="max-w-[87rem] mx-auto pt-20 flex md:flex-col justify-between items-center text-white">
       <div className='space-y-4'>
         <h1 className='text-2xl'>Spotlight</h1>
         <p className='text-lg'>Find more current news and interesting events on the News and events page.</p>
       </div>
       <div>
         <button className='border border-white py-3 px-10 rounded-full'>See all Aalto University news</button>
       </div>
     </div>
     <div className='max-w-[87rem]  mx-auto grid grid-cols-3 gap-5 md:grid-cols-1 pt-5 '>
       {[
         {
           title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
           link: ["Shrinking from the heat",
             "Reactive fabrics respond to changes in temperature"]
         },
         { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
         { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY", link: ["Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking", "UBI Global World Benchmark Study ranks top"] }
       ].map((e, idx) => {
         return (
           <div className='text-white border-2 border-white flex h-full content-start flex-col justify-between'>
             <img src={e.title} alt="" className='mb-3' />
             <div className='px-7 '>
               {e.link.map((val, ix) => {
                 return (
                   <p className={`${ix === 0 ? 'text-xl' : ''}`}>{val}</p>
                 )
               })}
             </div>
             <div className='px-7 mt-5'>
               <p>25-1 20231 News</p>
             </div>
           </div>
         )
       })}
     </div>
   </section>
  )
}

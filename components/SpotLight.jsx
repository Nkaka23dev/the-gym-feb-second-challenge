import React from 'react'

export default function SpotLight() {
  return (
     <section className="bg-[#2D2D2D] pb-20 px-4">
     <div className="max-w-[87rem] mx-auto pt-20 flex md:flex-col justify-between items-center text-white">
       <div className='space-y-3'>
         <h1 className='text-[1.7rem]'>Spotlight</h1>
         <p className='text-xl md:text-[1.3rem]'>Find more current news and interesting events on the News and events page.</p>
       </div>
       <div>
         <button className='border md:hidden border-white py-2 px-8 text-sm tracking-wide rounded-full'>See all Aalto University news</button>
       </div>
     </div>
     <div className='max-w-[87rem]  mx-auto grid grid-cols-3 gap-5 md:grid-cols-1 pt-5 '>
       {[
         {
           title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
           link: ["Shrinking from the heat",
             "Reactive fabrics respond to changes in temperature"]
         },
         { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1380w_600h_n/public/2023-02/pipot4_1.jpg?h=a0adc964&itok=ujnsm-1E", link: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
         { title: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_914w_ah_n/public/2022-03/SLUSH2019_21-11-2019_photo_Mikko_Raskinen_038.jpg?itok=J87hxKLs", link: ["Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking", "UBI Global World Benchmark Study ranks top"] }
       ].map((e, idx) => {
         return (
           <div className='text-white border-2 border-white flex h-full content-start flex-col justify-between'>
             <img src={e.title} alt="" className={`${idx === 2 ? 'mb-5' : ''} h-52 md:h-36 object-cover object-center aspect-video`} />
             <div className='px-7  md:px-3 md:pt-4 space-y-3 md:space-y-6'>
               {e.link.map((val, ix) => {
                 return (
                   <p className={`${ix === 0 ? 'text-xl' : ''} `}>{val}</p>
                 )
               })}
             </div>
             <div className='px-7 md:px-3 md:mt-5 mb-3'>
               <p>25-1 20231 News</p>
             </div>
           </div>
         )
       })}
       <button className='border hidden md:block border-white text-white py-2 px-4 text-sm tracking-wide rounded-full'>See all Aalto University news</button>
     </div>
   </section>
  )
}

import React from 'react'

export default function Gallery() {
  return (
    <>
    
        {/* section following hero icons */}
        <section className="bg-[#2D2D2D] px-4 text-white">
          <div className='max-w-[87rem]  mx-auto grid grid-cols-4 md:gap-3 gap-5 md:grid-cols-2 pt-5 '>
            {[
              {
                img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV",
                text: ["Shrinking from the heat",
                  "Reactive fabrics respond to changes in temperature"]
              },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Otaniemi_Garden_plots_3-6-2020_photo_Mikko_Raskinen_003_0.jpg?itok=Vng5fdwh", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto%20University%20Va%CC%88re%20Tuomas%20Uusheimo-180709-aalto-vare-015.jpg?itok=r0KJCZur", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/4.jpg?itok=rlgwZSLs", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/La%CC%88nsimetro_avajaiset_18112017_%C2%A9JaakkoKahilaniemi-1322.jpg?itok=HI1_9DSA", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/midgard/images/1e75bf8f2258e8a5bf811e7b96a6dad767c7f287f28-aaltofestival_naytos16_student-ma-collection_23_maija_mero_25-5-2016_photo_mikko_raskinen_035_en_en_fi_fi.jpg?itok=AUafdI2y", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/37135037943_32840d9184_o.jpg?itok=jtGoBONW", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },
              { img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_Vision_Forum_07062018_photo_by_Lasse_Lecklin_014%281%29.jpg?itok=R8uYSV9p", text: ["Knit an Aalto hat for yourself or a friend!", "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special"] },

            ].map((e, idx) => {
              return (
                <div className='text-white'>
                  <img class="object-cover object-center aspect-square md:aspect-video md:h-32 h-56 w-full" src={e.img} alt="" className='mb-3' />
                  <div className='text-[0.75rem]'>
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

import React from 'react'

export default function University() {
  return (
    <section className="md:px-5">
     <section className='-mt-56 max-w-[84rem] relative z-20 mx-auto bg-[#0058AD] text-white'>
          <div className='text-7xl md:text-4xl font-extrabold pt-12 pb-20 tracking-wide px-10'>Explore Aalto University</div>
          <div className='grid grid-cols-3 md:grid-cols-1 content-center md:border-t border-t-2 border-white'>
            {["Study at Aalto", "Open positions", "Contact us"].map((e, idx) => {
              return (
                <div className={`${idx !== 2? "border-r-2 md:border-t border-r-white" :""} md:py-5 py-10`}>
                  <p className='text-center text-2xl font-semibold underline tracking-wide'>{e}</p>
                </div>
              )
            })}
          </div>
        </section>
    </section>
  )
}

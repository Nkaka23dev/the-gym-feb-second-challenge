import React from 'react'

export default function University() {
  return (
    <>
     <section className='-mt-56 max-w-[84rem] relative z-20 mx-auto bg-[#0058AD] text-white'>
          <div className='text-7xl font-bold py-10 px-10'>Explore Aalto University</div>
          <div className='grid grid-cols-3 content-center border-t-2 border-white'>
            {[1, 2, 3].map((e, idx) => {
              return (
                <div className=' border-r-2 border-r-white py-10'>
                  <p className='text-center text-2xl font-semibold tracking-wide'>Study at Aalto</p>
                </div>
              )
            })}
          </div>
        </section>
    </>
  )
}

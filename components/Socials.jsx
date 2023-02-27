import React from 'react'

export default function Socials() {
  return (
   <>
     {/* section with yello icons */}
     <section className='bg-[#004C97] py-28'>
          <div className='text-white space-y-7'>
            <div className='text-center md:text-4xl text-7xl font-extrabold'>Follow us</div>
            <div className='max-w-xl mx-auto md:flex-col flex justify-between'>
              {["facebook,", "twitter,", "instagram&", "linkedin"].map((e, idx) => {
                return (
                  <div className='flex md:flex-col items-center gap-5'>
                    <div className='text-4xl md:text-2xl underline'>{e}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
   </>
  )
}

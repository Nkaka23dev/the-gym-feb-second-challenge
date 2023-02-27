import React from 'react'

export default function Socials() {
  return (
   <>
     {/* section with yello icons */}
     <section className='bg-[#004C97] py-24'>
          <div className='text-white space-y-7'>
            <div className='text-center text-7xl font-extrabold'>Follow us</div>
            <div className='max-w-xl mx-auto flex justify-between'>
              {[1, 2, 3, 4].map((e, idx) => {
                return (
                  <div className='flex items-center'>
                    <h1 className='text-4xl underline'>facebook,</h1>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
   </>
  )
}

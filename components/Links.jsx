import React from 'react'

export default function Links() {
  return (
   <>
     {/* section with yello icons */}
     <section className='bg-[#2D2D2D] -mt-20 pb-32 pt-40'>
          <div className='text-white space-y-7'>
            <div className='text-center text-2xl'>Important quicklinks</div>
            <div className='max-w-6xl mx-auto  flex justify-between'>
              {[1, 2, 3].map((e, idx) => {
                return (
                  <div className='flex items-center'>
                    <div className='bg-yellow-500 p-7 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                    </div>
                    <h1 className='text-2xl'>For personnel</h1>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
   </>
  )
}

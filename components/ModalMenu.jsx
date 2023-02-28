import React from 'react'

export default function ModalMenu() {
  return (
    <section>
        <div className='max-w-6xl mx-auto grid py-5  grid-cols-4 space-y-5'>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((e,idx) => {
            return(
                <div className='mt-4 cursor-pointer'>
                    <h1 className='underline text-xl'>Bachelor's admissions</h1>
                </div>
            )
        })}
        </div>
    </section>
  )
}

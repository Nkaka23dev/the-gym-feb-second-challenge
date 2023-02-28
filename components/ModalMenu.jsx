import Link from 'next/link'
import React from 'react'

export default function ModalMenu() {
  return (
    <section>
        <div className='max-w-6xl mx-auto grid py-5 items-start grid-cols-4 space-y-5'>
        {["APPIy-tQ-Aa!tQ", "Bachelor's admissions", "Events for applicants", "Contact admission services", "Find a studLprggramme", "Master's admissions", "Chat with students", "Exchange students", "How to apply", "Doctoral admissions", "Subscribe to newsletter", "Scholarships and tuition fees", "Campus life", "Lifewide Leaming"].map((e,idx) => {
            return(
               
                <div key={idx} className='mt-4 hover:bg-[#4a4a4a] pl-5  cursor-pointer'>
                    <Link href={e} className='underline text-xl'>{e}</Link>
                </div>
            )
        })}
        </div>
    </section>
  )
}

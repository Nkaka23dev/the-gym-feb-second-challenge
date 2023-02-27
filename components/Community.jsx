import React from 'react'

export default function Community() {
  return (
    <>
     {/* section with yello icons */}
     <section className="bg-[#2D2D2D] -mt-20 pb-28 pt-40">
        <div className="text-white space-y-7">
          <div className="text-center text-2xl tracking-wide">
          Community voices
          </div>
          <div className="max-w-6xl mx-auto md:flex-col   flex justify-between">
            {[
              {
                title: "Aalto Handbook",
                svg: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/27400150666_8649bc706c_o_Original_thumbnail.jpg?h=d743a63a&itok=dwD4tEs5"
              },
              {
                title: " Aalto Handbook",
                svg: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/27400150666_8649bc706c_o_Original_thumbnail.jpg?h=d743a63a&itok=dwD4tEs5"
              },
              {
                title: "Aalto Handbook",
                svg: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/27400150666_8649bc706c_o_Original_thumbnail.jpg?h=d743a63a&itok=dwD4tEs5"
              },
            ].map((e, idx) => {
              return (
                <div key={idx} className="flex md:mx-auto md:mt-2 items-center gap-2">
                  <div className=" fill-black text-black">
                    <img className='rounded-full w-24 h-24 md:h-16 md:w-16' src={e.svg} alt="" />
                  </div>
                  <h1 className="text-xl">{e.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

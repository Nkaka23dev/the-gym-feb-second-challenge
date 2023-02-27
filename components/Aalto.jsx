import React from 'react'

export default function Aalto() {
  return (
    <>
     {/* bg section */}
     <section className='py-52' style={{
          backgroundImage: `url("https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N")`,
          backgroundColor: '#cccccc', /* Used if the image is unavailable */
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}>
        </section>
    </>
  )
}

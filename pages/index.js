import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Socials from '@/components/Socials'
import Reasearch from '@/components/Reasearch'
import Information from '@/components/Information'
import Courses from '@/components/Courses'
import Community from '@/components/Community'
import Gallery from '@/components/Gallery'
import Compus from '@/components/Compus'
import Schools from '@/components/Schools'
import Links from '@/components/Links'
import University from '@/components/University'
import Aalto from '@/components/Aalto'
import Events from '@/components/Events'
import SpotLight from '@/components/SpotLight'
import Hero from '@/components/Hero'
import Space from '@/components/Space'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aalto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <SpotLight />
        <Events />
        {/* Empty section */}
        <section className='py-10 bg-[#2D2D2D]'>
        </section>
        {/* bg section */}
        <Aalto />
        <University />
        <Links />
        {/* explore section */}
        <Schools />
        <Compus />
        <Gallery />
        <Community />
        <Courses />
        <Information />
        {/* section following hero icons */}
        <Reasearch />
        {/* space */}
        <Space />
        <Socials />
        {/* space */}
        <Space />
        <Footer />
      </main>
    </>
  )
}



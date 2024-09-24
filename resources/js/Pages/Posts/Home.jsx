import HeroHome from '@/Components/Home/HeroHome'
import MarqueeWrapper from '@/Components/Home/MarqueeWrapper'
import Navbar from '@/Components/Navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutUs from "@/Components/AboutUs/AboutUs"

function Home() {
  return (
    <>
      <Head title='Home' />
      <div className='overflow-clip relative h-fit w-screen'>
        <Navbar />
        <HeroHome />
        <MarqueeWrapper />
        <AboutUs id="about-us" /> {/* Ensure AboutUs component has the same ID */}
      </div>
    </>
  )
}
export default Home;

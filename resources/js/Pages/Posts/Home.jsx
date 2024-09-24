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
      <div className='overflow-hidden relative h-fit w-screen'>
        <Navbar />
        <HeroHome />
        <MarqueeWrapper />
        <AboutUs />
      </div>
    </>
  )
}
export default Home;

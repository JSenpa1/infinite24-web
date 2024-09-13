import HeroHome from '@/Components/Home/HeroHome'
import MarqueeWrapper from '@/Components/Home/MarqueeWrapper'
import Navbar from '@/Components/Navbar/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

function Home() {
  return (
    <>
      <Head title='Home' />
      <div className='overflow-hidden'>
        <Navbar />
        <HeroHome />
        <MarqueeWrapper />
      </div>
    </>
  )
}

export default Home
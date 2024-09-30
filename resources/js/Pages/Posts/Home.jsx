import HeroHome from '@/Components/Home/HeroHome'
import MarqueeWrapper from '@/Components/Home/MarqueeWrapper'
import Navbar from '@/Components/Navbar/Navbar'
import HomePage3 from '@/Components/Home/HomePage3'
import HomePage4 from '@/Components/Home/HomePage4'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutUs from "@/Components/AboutUs/AboutUs"
import ContactUs from '@/Components/ContactUs/Contact'
import Footer from '@/Components/Navbar-Footer/Footer'

function Home() {
  return (
    <>
      <Head title='Home'/>
      <div className='overflow-clip relative h-fit w-screen'>
        <Navbar />
        <HeroHome />
        <MarqueeWrapper />
        <AboutUs id="about-us" />
        <HomePage3 id="timeline" />
        <ContactUs id="contact-us" />
        <Footer />
      </div>
    </>
  )
}
export default Home;

{/* <HomePage4 id="sponsor" /> */}

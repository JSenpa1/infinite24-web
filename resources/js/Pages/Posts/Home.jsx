import HomePage3 from '@/Components/Home/HomePage3'
import HomePage4 from '@/Components/Home/HomePage4'
import { Head } from '@inertiajs/react'
import React from 'react'

function Home() {
  return (
    <>
      <Head title='Home' />
      <div className='overflow-hidden'>
        <HomePage3 />
        <HomePage4 />
      </div>
    </>
  )
}

export default Home
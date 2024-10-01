import React, { useState } from 'react'
import axios from 'axios';
import paperForm from "../../../public/Assets/paper form.png";
import infinite from "../../../public/assets/infinite.png";
import polygon from "../../../public/assets/polygon.png";
import NavBar from '@/Components/Navbar/NavbarFixed';
import { Link } from '@inertiajs/react'
import { Head } from '@inertiajs/react';

function PembayaranDone() {
    return (
        <>
        <Head title='Pembayaran Done'/>
        <div className="relative min-h-screen">
        <NavBar />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#003049]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#003049]">
          <img src={polygon} alt="Polygon Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <img
              src={infinite}
              alt="Infinite"
              className="flex justify-center items-center mt-20 z-20 w-72"
          />
          <div
            className="w-full max-w-xl min-h-[450px] p-8 rounded-lg shadow-lg bg-white z-10 relative bg-no-repeat bg-cover flex flex-col"
            style={{ backgroundImage: `url(${paperForm})` }}
          >
            <div>
              <h1 className='text-red-500 font-extrabold font-sans text-center'>Pembayaran Berhasil!!</h1>
              <p1 className='font-semibold font-sans mt-4 text-[12px] md:text-[16px]'>Pendaftaran kamu untuk acara Infinite telah berhasil. Kami sangat antusias menyambut kehadiranmu dalam acara seru ini! Berikut adalah informasi penting yang perlu kamu ketahui:</p1>
            </div>

              <p1 className='font-sans md:text-[20px] text-[14px] font-extrabold md:mt-8 mt-4'>Tanggal Acara: 3 November 2024</p1>
              <p1 className='font-sans md:text-[20px] text-[14px] font-extrabold'>Open Registration : Pukul 14.30 WIB</p1>
              <p1 className='font-sans md:text-[20px] text-[14px] font-extrabold'>Open Gate         : Pukul 15.30 WIB</p1>
              <p1 className='font-sans md:text-[18px] text-[14px] font-extrabold'>Location: Lobby B, Universitas Multimedia Nusantara</p1>

              <div className='flex justify-end md:mt-8 mt-4'>
              <Link href="/">
                <button
                  className="px-6 py-2.5 bg-[#780000] text-white font-medium text-xs leading-tight uppercase rounded shadow-none hover:bg-[#990000] focus:bg-[#990000] focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out
                  sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-5 md:py-2.5 lg:text-base lg:px-6 lg:py-2.5"
                  style={{
                    boxShadow: "4px 4px 0px #000000",
                  }}
                >
                  Kembali Ke Home
                </button>
              </Link>
              </div>
            {/* <form className="space-y-6 w-full">
              <div className="mt-8 p-4 flex items-center gap-7 justify-center">
                <Link href="/">
                    <button
                    type="button"
                    className="px-6 py-2.5 bg-white border border-[#780000] text-[#780000] font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
                    sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-5 md:py-2.5 lg:text-base lg:px-6 lg:py-2.5"
                    style={{
                        boxShadow: "4px 4px 0px #000000",
                    }}
                    >
                    KEMBALI
                    </button>
                </Link>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      </>

  )
}

export default PembayaranDone

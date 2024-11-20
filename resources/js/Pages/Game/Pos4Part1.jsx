import React, { useState, useRef } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import Button from '../../Components/Game/Button';

function Pos4Part1({}) {
    const subtitles = [
        "Setiap Kelompok terdiri dari 10 orang, masing-masing diberi satu sedotan sebagai alat bantu.",
        "Peserta berdiri mengelilingi kawat loket dan harus bekerja sama mengeluarkan bola dari dalamnya menggunakan sedotan melalui lubang-lubang kawat.",
        "Kelompok yang menyelesaikan semua pos dengan cepat dan benar akan menjadi pemenang."
    ];

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const[messageIndex, setMessageIndex] = useState(0);

    const handleNext = (e) => {
        e.preventDefault();
        setMessageIndex((prevIndex) =>
            prevIndex < subtitles.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    // Function to handle the "Back" button click
    const handleBack = (e) => {
        e.preventDefault();
        setMessageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

     return(
        <div className="bg-dark-blue">
            <Navbar />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center w-3/4 lg:w-1/2 h-[400px] rounded-xl bg-white">
                <form action="/game/41/confirmation" method="post" className="w-3/4 md:w-1/2 h-fit text-center">
                    <input type="hidden" name="_token" value={csrfToken} />
                    <div id="title" className="text-dark-blue montserrat-semibold text-2xl">POS 4 RULES</div>
                    <div id="message" className="text-black text-sm my-5">{subtitles[messageIndex]}</div>
                    <div className="flex justify-evenly">
                        {messageIndex > 0 && (
                        <button type="button" onClick={handleBack} className="relative w-[150px] h-12 montserrat-semibold text-white">
                            <div className={`absolute flex justify-center items-center w-full h-full top-0 left-0 rounded-md bg-dark-blue z-10`}>Back</div>
                            <div className="absolute w-full h-full top-1 left-1 rounded-md bg-black z-0"></div>
                        </button>
                        )}
                        {messageIndex < subtitles.length - 1 && (
                        <button type="button" onClick={handleNext} className="relative w-[150px] h-12 montserrat-semibold text-white">
                            <div className={`absolute flex justify-center items-center w-full h-full top-0 left-0 rounded-md bg-dark-blue z-10`}>Next</div>
                            <div className="absolute w-full h-full top-1 left-1 rounded-md bg-black z-0"></div>
                        </button>
                        )}
                        {messageIndex == subtitles.length - 1 && (
                        <button type="submit" className="relative w-[150px] h-12 montserrat-semibold text-white">
                            <div className={`absolute flex justify-center items-center w-full h-full top-0 left-0 rounded-md bg-dark-blue z-10`}>Start</div>
                            <div className="absolute w-full h-full top-1 left-1 rounded-md bg-black z-0"></div>
                        </button>
                        )}
                    </div>
                </form>
                </div>
            </div>
        </div>
     );
}

export default Pos4Part1;
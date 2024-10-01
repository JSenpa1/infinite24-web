import React from 'react';
import bg from '../../../../assets/PopUp.png';
import arrowDown from '../../../../assets/arrowDown.png';
import '../../../../css/popupfont.css';
import { Link } from '@inertiajs/react';

export default function PopUpPos3Part1() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div
                className="p-2 md:w-[612px] w-[350px] sm:w-[400px] text-5xl h-[300px] md:text-6xl md:h-[418.9px] fontCrayon text-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
            >
                <h1 className='text-[#003049]'>Jawaban anda</h1>
                <h1 className='text-[#003049]'>Benar !!!</h1>
                <img src={arrowDown} alt="Arrow Down" className='mt-2' />
                <Link href="/game/pos3part2">
                    <button type="submit" className="mt-4 text-[#780000]">
                        NEXT
                        <hr className="h-1 bg-[#780000] border-none" />

                    </button>
                </Link>
            </div>
        </div>
    );
}

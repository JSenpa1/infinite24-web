import React from 'react';
import bg from '../../../../assets/PopUp.png';
import arrowDown from '../../../../assets/arrowDown.png';
import '../../../../css/popupfont.css';
import { Link } from '@inertiajs/react';

export default function PopUpPos3Part1() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div
                className="p-2 md:w-[612px] w-[360px] sm:w-[420px] text-5xl h-[400px] md:text-6xl md:h-[418.9px] fontCrayon text-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
            >
                <h1 className='text-[#003049] pl-16 md:pl-10 font-bold text-4xl md:text-5xl'>Jawaban anda Benar !!</h1>
                <h5 className='text-[#003049] pl-16 md:pl-10 mt-5 text-3xl md:text-4xl w-[90%] md:w-[80%]'>Silahkan Tunjukkan Pesan ini ke PIC Pos untuk Mendapatkan Clue Berikutnya</h5>
                <Link href="/game/pos3part2">   
                    <button type="submit" className="pl-16 md:pl-10 mt-4 text-6xl text-[#780000]">
                        NEXT
                        <hr className="h-1 bg-[#780000] border-none" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

import React from 'react';
import '../../../css/popupfont.css';
import { Link } from '@inertiajs/react';

export default function PopUpCode({code, imageUrl, action}) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const bgPath = "/Assets/PopUp.png";
    const arrowDownPath = "/Assets/arrowDown.png";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                className="p-2 md:w-[612px] w-[360px] sm:w-[420px] text-5xl h-[400px] md:text-6xl md:h-[418.9px] fontCrayon text-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bgPath})`, backgroundSize: 'cover' }}
            >
                <h1 className='text-[#003049] pl-16 md:pl-10 font-bold text-4xl md:text-5xl'>Jawaban anda Benar !!</h1>
                <img src={imageUrl} />
                <form action={action} method="post">
                    <input type="hidden" name="_token" value={csrfToken} />
                    <button type="submit" className="mt-4 text-[#780000]">
                        NEXT
                        <hr className="h-1 bg-[#780000] border-none" />
                    </button>
                </form>
            </div>
        </div>
    );
}

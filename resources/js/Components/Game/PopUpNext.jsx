import React from 'react';
import '../../../css/popupfont.css';

export default function PopUpNext({action}) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const bgPath = "/Assets/PopUp.png";
    const arrowDownPath = "/Assets/arrowDown.png";
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                className="p-2 md:w-[612px] w-[350px] sm:w-[400px] text-5xl h-[300px] md:text-6xl md:h-[418.9px] fontCrayon text-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bgPath})`, backgroundSize: 'cover' }}
            >
                <h1 className='text-[#003049] pl-6 md:pl-10 font-bold text-2xl md:text-5xl'>Jawaban anda Benar !!</h1>
                <h5 className='text-[#003049] pl-6 md:pl-10 mt-5 text-xl md:text-4xl w-[90%] md:w-[80%]'>Silahkan Tunjukkan Pesan ini ke PIC Pos untuk Mendapatkan Clue Berikutnya</h5>
                <img src={arrowDownPath} alt="Arrow Down" className='mt-2' />
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

import React, { useState } from 'react';
import PopUpPos3Part1 from './PopUpPos3Part1';
import erroricon from '../../../../assets/error_icon.png';
import cursor from '../../../../assets/cursor.png';
import { Link, Head } from '@inertiajs/react';

function Pos3Part1() {
    const [formData, setFormData] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false); // Control pop-up visibility

    const correctAnswer = 'CLOCK'; // Replace with the actual correct answer

    function handleSubmit(e) {
        e.preventDefault(); // Prevent form from refreshing the page
        if (formData.trim().toUpperCase() === correctAnswer) {
            setShowPopup(true); // Show the pop-up on correct answer
        } else {
            setMessage('Wrong Answer. Try Again!');
        }
    }

    return (
        <div className="bg-[#003049] montserrat-semibold">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center px-5 py-10 bg-white rounded-xl shadow-lg w-[328px] h-[379px] md:w-[743px] md:h-[398px] text-center">
                    <h1 className='text-[#003049] text-2xl md:text-4xl pb-3'>MASUKKAN JAWABAN</h1>
                    <h3 className='text-[#FF0000] text-sm md:text-md w-80 pb-9'>Silahkan melihat-lihat di sekitar kalian, masukkan tebakan anda disini.</h3>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                        <input
                            name="answerpos3"
                            placeholder='CLOCK'
                            value={formData}
                            onChange={(e) => setFormData(e.target.value)}
                            className="w-[240px] md:w-[350px] border-b-4 border-x-0 z-0 border-t-0 border-[#003049] focus:border-[#003049] focus:scale-95 bg-transparent rounded-t-xl text-center"
                        />
                        <div className="mt-10 z-0 flex flex-row relative">
                            <button type="submit" className='bg-[#003049] z-0 py-3 shadow-[5px_5px_0px_rgba(0,0,0,1)] px-12 text-white rounded-lg'>
                                SUBMIT
                            </button>
                            <img src={cursor} alt="Cursor" className='z-10 absolute w-[50%]' style={{ top: '100%', left: '110%', transform: 'translate(-50%, -50%)' }} />
                        </div>
                    </form>
                </div>
                {message && (
                    <div className="mt-5 px-4 py-2 flex flex-row bg-[#FDF0D5] rounded-lg">
                        <img src={erroricon} alt="Error Icon" className='pr-3' /><p className={`text-md ${message === 'Correct Answer! 🎉' ? 'text-green-500' : 'text-[#71192F]'}`}>
                            {message}
                        </p>
                    </div>
                )}
            </div>
            {showPopup && <PopUpPos3Part1 />}
        </div>
    )
}

export default Pos3Part1
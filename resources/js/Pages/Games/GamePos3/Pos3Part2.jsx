import React, { useState, useRef } from 'react';
import PopUpPos3Part2 from './PopUpPos3Part2';
import kodeMorse from '../../../../assets/kodeMorse.png';
import sandi from '../../../../assets/SANDI MORSE.png';
import erroricon from '../../../../assets/error_icon.png';
import Jam from '../../../../assets/jampos3.png';
// import Grid from '../../../../assets/GridFull.png';
import Grid from '../../../../assets/GridPenghapus.png';
// import Penghapus from '../../../../assets/Penghapus.png';
import Notes from '../../../../assets/Notes.png';

function Pos3Part2() {
    const [formData, setFormData] = useState(Array(6).fill(''));
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const inputRefs = useRef([]);

    const correctAnswer = 'CLOCKS';

    function handleInputChange(index, event) {
        const newChar = event.target.value.slice(0, 1).toUpperCase();

        const newFormData = [...formData];
        newFormData[index] = newChar;
        setFormData(newFormData);

        // Automatically move to the next input if the current input is filled
        if (newChar && index < formData.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        // Handle deletion: if the input is empty, focus on the previous input
        if (newChar === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        // Check if all inputs are filled and submit automatically
        if (newFormData.join('').length === 6) {
            handleSubmitp2();
        }

        // Prevent default behavior
        event.preventDefault();
    }

    function handleSubmitp2(e) {
        e.preventDefault();
        const userAnswer = formData.join('');
        if (userAnswer === correctAnswer) {
            setShowPopup(true);
        } else {
            setMessage('Wrong Answer. Try Again!');
        }
        setFormData(Array(6).fill('')); // Clear inputs after submission
    }

    return (
        <div className="bg-[#003049] montserrat-semibold">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen">
                <div className="bg-[#d37d3f] shadow-xl mt-32 sm:mt-52 md:mt-0 w-[330px] h-[270px] sm:w-[400px] md:w-[740px] lg:w-[820px] px-4 md:px-7 py-4 md:py-7 flex justify-center items-center sm:h-[300px] md:h-[450px] relative">
                    <div
                        className="bg-[#015b43] shadow-lg w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center h-full relative"
                        style={{ backgroundImage: `url(${Grid})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                    >
                        <img
                            src={Jam}
                            alt="Jam Tangan"
                            className="sm:w-[180px] md:w-[246px] sm:h-[180px] w-[150px] h-[150px] absolute md:top-0 md:left-0 top-[-180px] z-9999 sm:top-[-180px] md:h-[246px] md:mt-16 lg:mt-20 md:ml-3 lg:ml-9"
                        />
                        <div className="flex flex-col gap-3 md:gap-5 items-center md:mt-0 mt-4 ml-0 md:ml-[250px]">
                            <img src={sandi} alt="Sandi" className="w-[150px] md:w-[180px]" />
                            <img src={kodeMorse} alt="Kode Morse" className="md:mt-0 mt-2 w-[280px] h-[180px] sm:w-[300px] md:w-[390px] sm:h-[200px] md:h-[250px]" />
                        </div>

                        {/* Notes image fixed to the bottom left of the container */}
                        <img
                            src={Notes}
                            alt="Notes"
                            className="absolute left-[-10%] bottom-[-20%] hidden md:block"
                        />
                    </div>
                </div>


                {message && (
                    <div className="mt-5 px-4 py-2 flex flex-row bg-[#FDF0D5] rounded-lg">
                        <img src={erroricon} alt="Error Icon" className='pr-3' /><p className={`text-md ${message === 'Correct Answer! 🎉' ? 'text-green-500' : 'text-[#71192F]'}`}>
                            {message}
                        </p>
                    </div>
                )}
                <form onSubmit={handleSubmitp2} className="mt-5 md:mt-8 flex flex-col justify-center items-center">
                    <div className="grid grid-cols-6 gap-3 md:gap-8 lg:gap-10">
                        {formData.map((value, index) => (
                            <input
                                key={index}
                                id={`answerpos3-${index}`}
                                name={`answerpos3-${index}`}
                                value={value}
                                maxLength={1}
                                onChange={(event) => handleInputChange(index, event)}
                                className="p-2 w-[40.9px] h-[38px] sm:w-[52.9px] sm:h-[50px] md:p-5 md:w-[79px] md:h-[72px] text-sm md:text-lg rounded-xl shadow-[0px_5px_0px_rgba(0,0,0,1)] text-center uppercase"
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </div>

                    <button type="submit" className="mt-6 md:mt-12 bg-[#669BBC] text-md py-2 px-8 md:text-2xl md:py-4 shadow-[5px_5px_0px_rgba(0,0,0,1)] md:px-12 text-white rounded-lg">
                        SUBMIT
                    </button>
                </form>
            </div>
            {showPopup && <PopUpPos3Part2 />}
        </div>
    );
}

export default Pos3Part2;

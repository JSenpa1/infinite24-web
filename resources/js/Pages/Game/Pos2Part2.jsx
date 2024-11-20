import Alert from '@mui/material/Alert';
import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"
import PopUpNext from '../../Components/Game/PopUpNext'
import Button from '../../Components/Game/Button';

const Pos2Part2 = ({error, success}) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (text, e) => {
        e
        setInputValue((prev) => (prev ? `${prev} ${text}` : text));
    };

    useEffect(() => {
        if (success) {
            setShowPopup(true);
        }
    }, [success]);

    return (
        <div className="bg-dark-blue">
            <Navbar />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center w-full h-[650px] md:h-[550px] rounded-xl bg-white">
                    <form action="/game/23/confirmation" method="post" className="w-3/4 h-fit text-center">
                        <input type="hidden" name="_token" value={csrfToken} />
                        <div id="title" className="text-dark-blue montserrat-semibold text-2xl">MASUKKAN JAWABAN</div>
                        {error && <Alert severity="error" className="text-sm my-5">{error}</Alert>}
                        <input name="code" className="w-full bg-white border-none outline-none focus:ring-0 focus:outline-none pt-3 text-center" required value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <hr className="border-t-2 border-dark-blue pt-5" />
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full py-3 text-[0.65rem]">
                        {[
                            "Kami adalah",
                            "berasal dari",
                            "dan kami",
                            "merupakan kewajiban",
                            "kami melaksanakan",
                            "perkuliahan",
                            "dengan",
                            "belajar tentang",
                            "Setiap hari",
                            "kami lanjut",
                            "prodi Informatika.",
                            "Setelah melaksanakan perkuliahan,",
                            "mengerjakan tugas",
                            "hingga matahari terbenam.",
                            "Walaupun lelah,",
                            "bersama-sama",
                            "algoritma dan pemrograman.",
                            "Universitas Multimedia Nusantara,",
                            "itu semua",
                            "kami sebagai mahasiswa.",
                            "yang dimulai",
                            "mahasiswa-mahasiswi",
                        ].map((text, index) => (
                            <div key={index}>
                              <button
                                type="button"
                                className="w-20 lg:w-28 h-12 border-2 border-black"
                                onClick={() => handleButtonClick(text)}
                              >
                                {text}
                              </button>
                            </div>
                          ))}
                        </div>
                        <Button color="dark-blue" cursorType="/images/cursorBlue.svg"/>
                    </form>
                </div>
            </div>
            {showPopup && <PopUpNext action="/game/24/confirmation"/>}
        </div>
    );
};

export default Pos2Part2;
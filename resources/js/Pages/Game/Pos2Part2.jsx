import Alert from "@mui/material/Alert";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Game/Navbar/Navbar";
import PopUpNext from "../../Components/Game/PopUpNext";
import Button from "../../Components/Game/Button";

const Pos2Part2 = ({ error, success }) => {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [availableButtons, setAvailableButtons] = useState([
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
    ]);
    const [selectedTexts, setSelectedTexts] = useState([]);

    const handleButtonClick = (text, index) => {
        setInputValue((prev) => (prev ? `${prev} ${text}` : text));
        setAvailableButtons((prev) => prev.filter((_, i) => i !== index));
        setSelectedTexts((prev) => [...prev, text]);
    };

    const escapeRegex = (text) => {
        return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Escape all special regex characters
    };

    const handleTextRemove = (text, index) => {
        setInputValue((prev) => {
            const escapedText = escapeRegex(text);
            // Use global search for the exact match of the text, ignoring word boundaries
            const regex = new RegExp(`${escapedText}`, "g");
            return prev.replace(regex, "").trim().replace(/\s+/g, " ");
        });
        setSelectedTexts((prev) => prev.filter((_, i) => i !== index));
        setAvailableButtons((prev) => [...prev, text]);
    };

    useEffect(() => {
        if (success) {
            setShowPopup(true);
        }
    }, [success]);

    return (
        <div className="bg-dark-blue">
            <div className="md:block hidden">
                <Navbar />
            </div>
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center w-full h-auto md:h-[550px] rounded-xl bg-white py-5">
                    <form
                        action="/game/23/confirmation"
                        method="post"
                        className="w-[95%] sm:w-[90%] md:w-3/4 h-fit text-center"
                    >
                        <input type="hidden" name="_token" value={csrfToken} />
                        <div
                            id="title"
                            className="text-dark-blue montserrat-semibold text-2xl"
                        >
                            MASUKKAN JAWABAN
                        </div>
                        {error && (
                            <Alert severity="error" className="text-sm my-5">
                                {error}
                            </Alert>
                        )}
                        <textarea
                            name="code"
                            className="w-full bg-white border-none outline-none focus:ring-0 focus:outline-none pt-3 text-center mt-5"
                            required
                            value={inputValue}
                            readOnly
                        />
                        <hr className="border-t-2 border-dark-blue pt-5" />

                        {/* START HANDLE rEMOVEEEE */}
                        <div className="flex flex-wrap gap-2 py-3">
                            {selectedTexts.map((text, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 px-2 py-1 bg-blue-100 border rounded text-xs"
                                >
                                    {text}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTextRemove(text, index)
                                        }
                                        className="text-red-500"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* END handle RemoVee */}

                        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full py-3 text-[0.65rem]">
                            {availableButtons.map((text, index) => (
                                <div key={index}>
                                    <button
                                        type="button"
                                        className="w-20 lg:w-28 h-12 border border-black shadow-md rounded-md"
                                        onClick={() =>
                                            handleButtonClick(text, index)
                                        }
                                    >
                                        {text}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <Button
                            color="dark-blue"
                            cursorType="/images/cursorBlue.svg"
                        />
                    </form>
                </div>
            </div>
            {showPopup && <PopUpNext action="/game/24/confirmation" />}
        </div>
    );
};

export default Pos2Part2;

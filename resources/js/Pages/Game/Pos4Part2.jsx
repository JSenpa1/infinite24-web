import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"
import PopUpNext from '../../Components/Game/PopUpNext'

const Pos4Part2 = ({error, success}) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (success) {
            setShowPopup(true);
        }
    }, [success]);

    return (
        <div className="bg-dark-blue">
            <Navbar />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputAnswer title="MASUKKAN JAWABAN" subtitle="" action="/game/42/confirmation" error={error}/>
            </div>
            {showPopup && <PopUpNext action="/game/43/confirmation"/>}
        </div>
    );
};

export default Pos4Part2;
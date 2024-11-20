import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"
import PopUpNext from '../../Components/Game/PopUpNext'

const Pos2Part2 = ({error, success}) => {
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
                <BoxToInputAnswer title="MASUKKAN JAWABAN" subtitle="" action="/game/23/confirmation" error={error}/>
            </div>
            {showPopup && <PopUpNext action="/game/24/confirmation"/>}
        </div>
    );
};

export default Pos2Part2;
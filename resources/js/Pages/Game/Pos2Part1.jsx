import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"
import PopUpCode from '../../Components/Game/PopUpCode'

const Pos2Part1 = ({alertCode, error, success}) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (alertCode) {
            alert(alertCode);
        }
    }, []);

    useEffect(() => {
        if (success) {
            setShowPopup(true);
        }
    }, [success]);

    return (
        <div className="bg-dark-blue">
            <Navbar />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputAnswer title="MASUKKAN JAWABAN" subtitle="" action="/game/21/confirmation" error={error}/>
            </div>
            {showPopup && <PopUpCode action="/game/22/confirmation" imageUrl="Assets/CartoonWater.svg"/>}
        </div>
    );
};

export default Pos2Part1;
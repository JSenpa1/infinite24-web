import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Game/Navbar/Navbar"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"
import PopUpPos5 from '../../Components/Game/PopUpPos5'

const Pos5Part2 = ({alertCode, error, success}) => {
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
                <BoxToInputAnswer title="MASUKKAN KODE KEPERGIAN" subtitle="" action="/game/53/confirmation" error={error}/>
            </div>
            {showPopup && <PopUpPos5 action="/game/54/confirmation"/>}
        </div>
    );
};

export default Pos5Part1;
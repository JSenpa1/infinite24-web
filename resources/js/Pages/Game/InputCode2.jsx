import Navbar from "../../Components/Game/Navbar/Navbar"
import PopUp from "../../Components/Game/PopUpNext"
import BoxToInputCode from "../../Components/Game/BoxToInputCode"
import React, { useEffect } from 'react';

function InputCode({error, id}){
    return(
        <div className="bg-dark-red">
            <Navbar />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputCode title="UNLOCK POS SELANJUTNYA" subtitle="Masukkan kode yang diberikan oleh PIC" action={`/game/pergi/${id}`} error={error}/>
            </div>
        </div>
    )
}

export default InputCode;
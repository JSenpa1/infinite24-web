import PopUp from "../../Components/Game/PopUp"
import BoxToInputCode from "../../Components/Game/BoxToInputCode"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"

export default function Index(){
    return(
        <div className="bg-dark-red">
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputCode title="Kode Kelompok" subtitle="Masukkan kode yang diberikan PIC" action="/game/check-status"/>
            </div>
        </div>
    );
}
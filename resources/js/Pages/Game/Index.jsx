import NavbarIndex from "../../Components/Game/Navbar/NavbarIndex"
import PopUp from "../../Components/Game/PopUp"
import BoxToInputCode from "../../Components/Game/BoxToInputCode"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"

export default function Index(){
    return(
        <div className="bg-dark-red">
            <NavbarIndex />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputCode title="Kode Kelompok" action="/game/check-status"/>
            </div>
        </div>
    );
}
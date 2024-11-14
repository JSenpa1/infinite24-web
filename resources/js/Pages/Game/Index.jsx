import NavbarIndex from "../../Components/Game/Navbar/NavbarIndex"
import PopUp from "../../Components/Game/PopUpNext"
import BoxToInputCode from "../../Components/Game/BoxToInputCode"
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer"

export default function Index({error}){
    return(
        <div className="bg-dark-red">
            <NavbarIndex />
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <BoxToInputCode title="Kode Kelompok" action="/game/check-status" error={error}/>
            </div>
        </div>
    );
}
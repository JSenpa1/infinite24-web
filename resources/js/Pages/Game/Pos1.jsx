
function Pos1(){
    return(
        <div className="bg-black montserrat-semibold text-white">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen border-2">
                <div className="flex flex-col justify-center items-center">
                    {/* <img /> */}
                    <div className="border-2 border-white aspect-video w-full mb-5">

                    </div>
                    <form className="grid grid-cols-3 gap-5 w-1/2 h-80">
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div><input name="answer" className="bg-black w-full text-center border-2"/></div>
                        <div></div>
                        <div><button className="bg-light-blue py-3 px-8 rounded-xl">Submit</button></div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Pos1;
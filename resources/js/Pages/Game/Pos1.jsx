
function Pos1(){
    return(
        <div className="bg-black montserrat-semibold text-white">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center">
                    {/* <img /> */}
                    <div className="border-2 border-white aspect-video w-4/5 lg:w-3/5 mb-5">

                    </div>
                    <form className="w-4/5 h-fit">
                        <div className="flex flex-col lg:flex-row h-full justify-around">
                            <div className="grid grid-cols-3 gap-5 w-full lg:w-1/3 mb-5 lg:mb-0 h-full">
                                <div className="col-span-3 text-center text-lg">Jawaban Soal 1</div>
                                <div><input name="answer1a" className="bg-black w-full text-center border-2" placeholder="A=?"/></div>
                                <div><input name="answer2a" className="bg-black w-full text-center border-2" placeholder="B=?"/></div>
                                <div><input name="answer3a" className="bg-black w-full text-center border-2" placeholder="C=?"/></div>
                                <div><input name="answer4a" className="bg-black w-full text-center border-2" placeholder="D=?"/></div>
                                <div><input name="answer5a" className="bg-black w-full text-center border-2" placeholder="E=?"/></div>
                                <div><input name="answer6a" className="bg-black w-full text-center border-2" placeholder="F=?"/></div>
                                <div><input name="answer7a" className="bg-black w-full text-center border-2" placeholder="G=?"/></div>
                                <div><input name="answer8a" className="bg-black w-full text-center border-2" placeholder="H=?"/></div>
                                <div><input name="answer9a" className="bg-black w-full text-center border-2" placeholder="I=?"/></div>
                            </div>
                            <div className="grid grid-cols-3 gap-5 w-full lg:w-1/3 mb-5 h-full">
                                <div className="col-span-3 text-center text-lg">Jawaban Soal 2</div>
                                <div><input name="answer1a" className="bg-black w-full text-center border-2" placeholder="A=?"/></div>
                                <div><input name="answer2a" className="bg-black w-full text-center border-2" placeholder="B=?"/></div>
                                <div><input name="answer3a" className="bg-black w-full text-center border-2" placeholder="C=?"/></div>
                                <div><input name="answer4a" className="bg-black w-full text-center border-2" placeholder="D=?"/></div>
                                <div><input name="answer5a" className="bg-black w-full text-center border-2" placeholder="E=?"/></div>
                                <div><input name="answer6a" className="bg-black w-full text-center border-2" placeholder="F=?"/></div>
                                <div><input name="answer7a" className="bg-black w-full text-center border-2" placeholder="G=?"/></div>
                                <div><input name="answer8a" className="bg-black w-full text-center border-2" placeholder="H=?"/></div>
                                <div><input name="answer9a" className="bg-black w-full text-center border-2" placeholder="I=?"/></div>
                            </div>
                        </div>
                        <div className="flex justify-center"><button className="bg-light-blue py-3 px-8 rounded-xl">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Pos1;
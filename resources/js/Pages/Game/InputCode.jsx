function InputCode(){
    return(
        <div className="bg-black montserrat-semibold text-white">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-between h-36 text-center">
                    <h1>Jawaban Anda <font className="">BENAR!</font></h1>
                    <form className="flex flex-col items-center">
                        <label className="mb-3">Silahkan input kode yang diberikan oleh PIC</label>
                        <input name="" className="bg-black w-1/2 text-center border-2" placeholder="Input Kode"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputCode;
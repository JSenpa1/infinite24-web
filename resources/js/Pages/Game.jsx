import Logo from '../../assets/logo.png';

function Game(){
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform your POST request or validation logic here
        // You can also send the form data to a backend using fetch or axios
    
        // After form submission, navigate to the new URL
        navigate('/game/check-status');
      };

    return(
        <div className="bg-cream montserrat-semibold">
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center w-80">
                    <img className="" src={Logo} />
                    <div className="bg-white rounded-lg h-36 border p-3">
                        <form action="/game/check-status" method="get" className="flex flex-col justify-around w-full h-full">
                            <input name="code" className="w-full h-[40%] rounded-md text-center" placeholder="Kode Kelompok" required/>
                            <button type="submit" className="w-full h-[40%] bg-black rounded-md text-center text-white">
                                Enter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;
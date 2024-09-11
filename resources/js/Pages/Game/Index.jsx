import Axios from 'axios';
import Alert from '@mui/material/Alert';
import Logo from '../../../assets/logo.png';

function Index({ error }){
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    return(
        <div className="bg-cream montserrat-semibold">
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center w-80">
                    {error ? (
                        <div className="flex justify-center">
                            <Alert severity="error">{ error }</Alert>
                        </div>
                    ) : null
                    }
                    <img className="" src={Logo} />
                    <div className="bg-white rounded-lg h-36 border p-3">
                        <form action="/game/check-status" method="post" className="flex flex-col justify-around w-full h-full">
                            <input type="hidden" name="_token" value={csrfToken} />
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

export default Index;
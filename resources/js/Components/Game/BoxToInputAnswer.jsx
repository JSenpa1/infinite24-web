import Alert from '@mui/material/Alert';
import Button from './Button';

export default function BoxToInputAnswer({title, error, action, subtitle}){
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    return(
        //Parent dibikin w-screen
        <div className="flex flex-col justify-center items-center w-3/4 lg:w-1/2 h-[400px] rounded-xl bg-white">
            <form action={action} method="post" className="w-3/4 md:w-1/2 h-fit text-center">
                <input type="hidden" name="_token" value={csrfToken} />
                <div id="title" className="text-dark-blue montserrat-semibold text-2xl">{title}</div>
                {error && <Alert severity="error" className="text-sm my-5">{error}</Alert>}
                {subtitle && <div id="subtitle" className="text-black text-sm">{subtitle}</div>}
                <input name="code" className="w-full bg-white border-none outline-none focus:ring-0 focus:outline-none pt-3 text-center" placeholder="" required/>
                <hr className="border-t-2 border-dark-blue py-5" />
                <Button color="dark-blue" cursorType="/images/cursorBlue.svg"/>
            </form>
        </div>
    );
}
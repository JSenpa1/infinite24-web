import Button from './Button';

export default function BoxToInputAnswer({title, error, action}){
    return(
        //Parent dibikin w-screen
        <div className="flex flex-col justify-center items-center w-3/4 lg:w-1/2 h-[400px] rounded-xl bg-white">
            <form action={action} method="post" className="w-3/4 md:w-1/2 h-fit text-center">
                <div id="title" className="text-dark-blue montserrat-semibold text-2xl">{title}</div>
                {error && <div id="subtitle" className="text-red-500 text-sm">{error}</div>}
                <input name="code" className="w-full bg-white border-none outline-none focus:ring-0 focus:outline-none pt-3 text-center" placeholder="" required/>
                <hr className="border-t-2 border-dark-blue py-5" />
                <Button color="dark-blue"/>
            </form>
        </div>
    );
}
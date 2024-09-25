import Button from './Button';

export default function BoxToInputCode({title, subtitle, action}){
    return(
        //Parent dibikin w-screen
        <div className="flex flex-col justify-center items-center w-3/4 lg:w-1/2 h-[400px] rounded-xl bg-white">
            <form action={action} method="post" className="w-3/4 md:w-1/2 h-fit text-center">
                <div id="title" className="text-dark-red montserrat-semibold text-2xl">{title}</div>
                {subtitle && <div id="subtitle" className="text-black text-sm">{subtitle}</div>}
                <input name="code" className="w-full bg-white border-none outline-none focus:ring-0 focus:outline-none pt-3 text-center" placeholder="" required/>
                <hr className="border-t-2 border-dark-red py-5" />
                <Button color="dark-red"/>
            </form>
        </div>
    );
}
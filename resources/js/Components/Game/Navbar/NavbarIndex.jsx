export default function NavbarIndex(){
    return(
        <div className="absolute top-0 w-screen h-fit">
            <div className="flex justify-between p-5 h-24">
                <div className="flex justify-center items-center w-32">
                    <img src="/images/logo_white.webp" />
                </div>
                <div className="flex justify-center items-center w-32">
                    <a className="flex items-center rounded-full p-2 text-dark-red bg-white"><img className="w-6 h-6 pr-1" src="/images/arrowright_red.svg"/>KEMBALI</a>
                </div>
            </div>
            <hr className="pb-1 border-t-2 border-white" />
            <hr className="border-t-2 border-white" />
        </div>
    );
}
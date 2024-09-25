export default function Navbar(){
    return(
        <div className="absolute top-0 w-screen h-fit">
            <div className="flex justify-center p-5 h-24">
                <div className="flex justify-center items-center w-32">
                    <img src="/images/logo_white_word.webp" />
                </div>
            </div>
            <hr className="pb-1 border-t-2 border-white" />
            <hr className="border-t-2 border-white" />
        </div>
    );
}
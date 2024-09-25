export default function Button({ color }){
    return(
        <button type="submit" className="relative w-[150px] sm:w-[250px] h-12 montserrat-semibold text-white">
            <div className={`absolute flex justify-center items-center w-full h-full top-0 left-0 rounded-md bg-${color} z-10`}>SUBMIT</div>
            <div className="absolute w-full h-full top-1 left-1 rounded-md bg-black z-0"></div>
        </button>
    );
}
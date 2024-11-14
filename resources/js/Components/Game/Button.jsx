
export default function Button({ color, cursorType }){
    return(
        <button type="submit" className="relative w-[150px] sm:w-[250px] h-12 montserrat-semibold text-white">
            <div className={`absolute flex justify-center items-center w-full h-full top-0 left-0 rounded-md bg-${color} z-10`}>SUBMIT</div>
            <div className="absolute w-full h-full top-1 left-1 rounded-md bg-black z-0"></div>
            <img src={cursorType} alt="Cursor" className='z-10 absolute w-[25%]' style={{ top: '100%', left: '100%', transform: 'translate(-50%, -50%)' }} />
        </button>
    );
}
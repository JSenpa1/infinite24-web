import React from 'react'
import IonIcon from "@reacticons/ionicons";

function RegisterButton() {
  return (
    <div className='mx-auto'>
        <button className="px-8 py-2 bg-dark-blue border-3 border-black h-10 w-40 shadow-[7px_5px_0px_black] text-white rounded-[20px] hover:bg-light-blue transition-transform transform hover:scale-105">
            <a href="/coming-soon" className="text-[15px] font-extrabold flex flex-row gap-2 items-center">
                REGISTER
                <IonIcon name="arrow-forward-outline"></IonIcon>
            </a>
        </button>
    </div>
  )
}

export default RegisterButton

import React from 'react'

function TimelineButton() {
  return (
    <div>
        <button className="px-10 py-2 bg-dark-blue border-3 border-black h-12 w-[240px] shadow-[7px_5px_0px_black] text-white rounded-[8px] hover:bg-light-blue transition-transform transform hover:scale-105">
            <a href="#timeline" className="text-[25px] font-extrabold flex flex-row justify-center items-center">
                TIMELINE
            </a>
        </button>
    </div>
  )
}

export default TimelineButton
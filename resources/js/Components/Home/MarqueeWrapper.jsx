import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeWrapper = () => {
  const marqueeText = "Ignite Innovation Be the Catalyze";
  const textArray = new Array(5).fill(marqueeText);

  return (
    <>
        <div className="md:mt-8 mt-[62%]">
            <div className=" border-black shadow-[0px_-10px_18px_gray]">
                <Marquee className="h-[60px] bg-dark-blue">
                    {textArray.map((text, index) => (
                    <span key={index} className="mx-5 font-outline-2 text-[23px] text-white font-bold">
                        {text}
                    </span>
                    ))}
                </Marquee>
            </div>
        </div>
    </>
  );
};

export default MarqueeWrapper;

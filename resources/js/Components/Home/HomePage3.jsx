import React, { useState, useEffect } from "react";
// import backgroundKertas from '../../../../public/Assets/background1.png';

const images = import.meta.glob('/public/assets/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const timeline = getImageByName('timeline');
const background1 = getImageByName('background1');
const doodle = getImageByName('doodle');
const arrow = getImageByName('arrow');

const HomePage3 = ({ id }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("November 3, 2024 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id={id} className="min-h-[1500px] flex flex-col justify-center items-center p-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})` }}
    >
      {/* // style={{ backgroundImage: `url(${background1})` }}  min-h-[1200px] */}

      <div className="absolute flex justify-center items-center">
        <img src={doodle} className='size-[35%] ml-[330px] mt-[-170px] sm:ml-[900px] sm:mt-[-220px] md:ml-[450px] md:mt-[-320px] lg:ml-[900px] lg:mt-[-220px]' alt="" />
      </div>

      <div className="absolute flex justify-center items-center">
        <img src={arrow} className='size-[40%] mr-[350px] mt-[750px] sm:size-[15%] sm:mt-[650px] sm:mr-[1000px] md:size-[25%] md:mt-[750px] md:mr-[500px] lg:mt-[700px] lg:mr-[1000px]' alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
      <img src={timeline} className='absolute w-[45%] sm:w-[45%] md:w-[30%] lg:w-[20%] size-80 top-[8%]' alt="" />
      <p className="text-dark-red text-xl max-w-md font-bold mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero risus,
          posuere id porttitor et, pretium et neque. Praesent ex nunc.
        </p>
      </div>

      <div className="relative z-10 text-center mt-32 md:mt-20 w-[85%] md:w-[60%]">
        <div className="bg-dark-red border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-m pt-10 pb-10 px-2 sm:pt-10 sm:pb-10">
          <h1 className="text-md sm:text-sm md:text-lg font-bold text-cream">NOVEMBER 3</h1>
          <h1 className="text-5xl md:text-7xl font-extrabold my-3 text-shadow text-cream">MALAM PUNCAK</h1>
          <div className="flex justify-center gap-2 sm:gap-4 my-4">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center
                        w-[70px] h-[58px] text-sm
                        sm:w-16 sm:h-16 sm:text-sm
                        md:w-20 md:h-20 md:text-2xl
                        lg:w-24 lg:h-24 lg:text-3xl
                        bg-cream text-dark-red font-black rounded-full shadow-lg mx-1 sm:mx-2 lg:mx-2 border-black border-4">
              <span>{String(value).padStart(2, "0")}</span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </span>
            </div>
            ))}
          </div>
          <p className="mt-10 text-sm md:text-base text-cream">
            Registration is open from <span className="font-bold">1 October 2024</span> -{" "}
            <span className="font-bold">20 October 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;

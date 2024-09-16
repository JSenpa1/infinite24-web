import React, { useState, useEffect } from "react";

const images = import.meta.glob('/public/assets/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const timeline = getImageByName('timeline');
const background1 = getImageByName('background1');
const doodle = getImageByName('doodle');
const arrow = getImageByName('arrow');

const HomePage3 = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("October 26, 2024 00:00:00").getTime();
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
    <div className="min-h-[1200px] flex flex-col justify-center items-center p-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})` }}>

      <div className="absolute flex justify-center items-center">
        <img src={doodle} className='size-[100%] ml-[900px] mt-[-220px]' alt="" />
      </div>

      <div className="absolute flex justify-center items-center">
        <img src={arrow} className='size-[15%] mr-[1000px] mt-[650px]' alt="" />
      </div>
      
      <div className="flex flex-col justify-center items-center">
      <img src={timeline} className='absolute size-80 top-[11%]' alt="" />
      <p className="text-dark-red text-xl max-w-md font-bold mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero risus, 
          posuere id porttitor et, pretium et neque. Praesent ex nunc.
        </p>
      </div>

      <div className="relative z-10 text-center">
      <div className="bg-dark-red border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-[900px] h-[360px] mt-20">
        <div className=" text-cream p-10 text-center">
          <h1 className="text-lg font-bold">OKTOBER 26</h1>
          <h1 className="text-7xl font-extrabold my-3 text-shadow">MALAM PUNCAK</h1>
          <div className="flex justify-center gap-4 my-4">
          {Object.entries(timeLeft).map(([label, value], index) => (
              <div key={index} className="flex flex-col items-center justify-center w-20 h-20 bg-cream text-dark-red font-bold text-3xl rounded-full shadow-lg mx-1 border-black border-4">
          <span>{String(value).padStart(2, "0")}</span>
          <span className="text-sm font-bold">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
        </div> ))}
          </div>
          <p className="mt-10 text-base">
            Registration is open from <span className="font-bold">22 January 2024</span> -{" "}
            <span className="font-bold">25 February 2024</span>
          </p>
        </div>
            </div>
      </div>
    </div>
  );
};

export default HomePage3;

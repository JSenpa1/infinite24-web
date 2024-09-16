import React from "react";

const images = import.meta.glob('/public/assets/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const sponsor = getImageByName('sponsor');

function HomePage4() {
  return (
    <div className="min-h-screen bg-grid-hero py-8 px-4">
      <div className="flex flex-col justify-center items-center mt-32">
      <img src={sponsor} className='absolute size-96' alt="" />
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
        <p className="text-dark-blue text-xl max-w-md font-bold mx-auto text-center my-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero risus, 
          posuere id porttitor et, pretium et neque. Praesent ex nunc.
        </p>
      </div>

        <div className="flex flex-wrap gap-6 max-w-6xl mx-auto justify-center items-center mt-20"> 
        <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-3/4 h-96">
        </div>

        <div className="flex flex-wrap gap-6 max-w-6xl mx-auto justify-center items-center mt-20">
        <div className="grid grid-cols-2 gap-6 flex-col justify-center items-center">
        <div className="bg-cream border-4 mx-20 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-96 h-48">
        </div>
        <div className="bg-cream border-4 mx-20 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-96 h-48">
        </div>
        </div>

        <div className="flex flex-wrap gap-6 max-w-6xl mx-auto justify-center items-center mt-20">
        <div className="grid grid-cols-3 gap-6">
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        <div className="bg-cream border-4 mx-5 my-5 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-80 h-40">
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default HomePage4;

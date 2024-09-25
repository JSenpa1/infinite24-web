import React from "react";

const images = import.meta.glob('/public/assets/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const sponsor = getImageByName('sponsor');

function HomePage4({ id }) {
  return (
    <div id={id} className="min-h-screen bg-grid-hero py-8 px-4">
      <div className="flex justify-center items-center mt-32">
        <img src={sponsor} className="max-w-full h-auto" alt="Sponsor" />
      </div>

      <div className="flex justify-center items-center mt-14">
        <p className="text-dark-blue text-xl max-w-md font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero risus,
          posuere id porttitor et, pretium et neque. Praesent ex nunc.
        </p>
      </div>

      <div className="flex justify-center mt-20">
        <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full max-w-3xl h-40 sm:h-96">
        </div>
      </div>

      <div className="flex justify-center mt-10 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 h-32 sm:h-48">
          </div>
          <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 h-32 sm:h-48">
          </div>
        </div>
      </div>

<div className="flex justify-center mt-10 sm:mt-20">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-6xl">
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
    <div className="bg-cream border-4 border-dark rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 w-full h-28 sm:h-40">
    </div>
  </div>
</div>

    </div>
  );
}

export default HomePage4;

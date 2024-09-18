import React from "react";

const images = import.meta.glob('/assets/*.png', { eager: true });

const getImageByName = (name) => {
  const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.png`));
  return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const infiniteLogo = getImageByName('infinite_is_here');
const globe = getImageByName('globe');
const rocketCursor = getImageByName('rocket_cursor');
const turtle = getImageByName('turtle');
const v4 = getImageByName('V.4');
const yakaliGaIkutan = getImageByName('yakali_ga_ikutan');
const starsBehindHand = getImageByName('stars_behind_hand');
const starsBehindTurtle = getImageByName('stars_behind_turtle');

const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  };

  return (
    <div className="relative min-h-screen">

      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#003049]"></div>

      {globe && (
        <img src={globe} alt="Globe" className="absolute bottom-10 left-10 w-24" />
      )}

      {infiniteLogo && (
        <img src={infiniteLogo} alt="Infinite is here" className="absolute top-5 left-5 w-20" />
      )}

      {rocketCursor && (
        <img src={rocketCursor} alt="Rocket Cursor" className="absolute top-10 left-60 w-12" />
      )}

      {turtle && (
        <img src={turtle} alt="Turtle" className="absolute bottom-20 left-16 w-24" />
      )}

      {v4 && (
        <img src={v4} alt="V.4 Logo" className="absolute top-1/2 left-5 w-24" />
      )}

      {yakaliGaIkutan && (
        <img src={yakaliGaIkutan} alt="Yakali Ga Ikutan" className="absolute top-5 right-10 w-20" />
      )}

      {starsBehindHand && (
        <img src={starsBehindHand} alt="Stars behind hand" className="absolute bottom-20 right-16 w-16" />
      )}

      {starsBehindTurtle && (
        <img src={starsBehindTurtle} alt="Stars behind turtle" className="absolute bottom-28 left-20 w-16" />
      )}

      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-xl p-8 rounded-lg shadow-lg bg-white z-10 relative">

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="flex flex-col items-start">
              <label htmlFor="nama" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">Nama</label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Isi nama disini"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="nim" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">NIM</label>
              <input
                type="number"
                id="nim"
                name="nim"
                placeholder="Isi NIM disini"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                required
                min="0"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="angkatan" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">Angkatan</label>
              <select
                id="angkatan"
                name="angkatan"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                required
              >
                <option value="" disabled selected className="text-gray-400">Pilih tahun angkatan</option>
                <option value="2024">2024</option>
                <option value="diluar-2024">Diluar 2024</option>
              </select>
            </div>
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                className="w-full max-w-36 bg-white text-[#780000] py-3 rounded-md border shadow-black"
              >
                Kembali
              </button>
              <button
                type="submit"
                className="w-full max-w-xs bg-[#780000] text-white py-3 rounded-lg border shadow-black"
              >
                Lanjut Pembayaran
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

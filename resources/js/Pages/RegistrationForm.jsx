import React from "react";
import polygon from "../../../public/assets/polygon.png";
import globe from "../../../public/assets/globe.png";
import infiniteLogo from "../../../public/assets/infinite is here.png";
import rocketCursor from "../../../public/assets/rocket cursor.png";
import turtle from "../../../public/assets/turtle.png";
import v4 from "../../../public/assets/V.4.png";
import yakaliGaIkutan from "../../../public/assets/yakali ga ikutan.png";
import starsBehindHand from "../../../public/assets/stars beside hand.png";
import starsBehindTurtle from "../../../public/assets/stars beside turtle.png";
import starsBesideGlobe from "../../../public/assets/stars beside globe.png";
import infinite from "../../../public/assets/infinite.png";
import ayoJoinInfinite from "../../../public/assets/ayo join infinite.png";
import paperForm from "../../../public/assets/paper form.png"; 

const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#003049]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#003049]">
        <img src={polygon} alt="Polygon Background" className="w-full h-full object-cover" />
      </div>

      
      <img src={ayoJoinInfinite} alt="ayo-join-infinite" 
      className="absolute bottom-7 left-80 w-80 z-30 mobile:w-40 tablet:w-60 laptop:w-72" />

      <img src={infinite} alt="Infinite" 
      className="absolute z-20 w-72 left-1/2 top-[29%] transform -translate-x-1/2 -translate-y-full mobile:w-40 tablet:w-60 laptop:w-72" />

      
      <img src={globe} alt="Globe" 
      className="absolute bottom-0.5 right-10 w-80 mobile:w-40 tablet:w-60 laptop:w-80" />

      <img src={infiniteLogo} alt="Infinite is here" 
      className="absolute top-32 left-24 w-64 mobile:w-32 tablet:w-48 laptop:w-64" />

      <img src={rocketCursor} alt="Rocket Cursor" 
      className="absolute top-72 left-44 w-60 mobile:w-30 tablet:w-40 laptop:w-60" />

      <img src={turtle} alt="Turtle" 
      className="absolute bottom-1 left-0.3 w-80 mobile:w-40 tablet:w-60 laptop:w-80" />

      <img src={v4} alt="V.4 Logo" 
      className="absolute top-80 right-0.5 w-48 mobile:w-24 tablet:w-32 laptop:w-48" />

      <img src={yakaliGaIkutan} alt="Yakali Ga Ikutan" 
      className="absolute top-24 right-0.5 w-56 mobile:w-28 tablet:w-40 laptop:w-56" />

      <img src={starsBehindHand} alt="Stars behind hand" 
      className="absolute top-72 right-32 w-24 mobile:w-12 tablet:w-16 laptop:w-24" />

      <img src={starsBehindTurtle} alt="Stars behind turtle" 
      className="absolute bottom-40 left-44 w-28 mobile:w-14 tablet:w-20 laptop:w-28" />

      <img src={starsBesideGlobe} alt="Stars beside globe" 
      className="absolute bottom-28 right-56 w-50 mobile:w-25 tablet:w-35 laptop:w-50" />

      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div
          className="w-full max-w-xl min-h-[450px] p-8 rounded-lg shadow-lg bg-white z-10 relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${paperForm})` }} 
        >
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="mt-8 flex flex-col items-start">
              <label htmlFor="nama" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">
                Nama
              </label>
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
              <label htmlFor="nim" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">
                NIM
              </label>
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
              <label htmlFor="angkatan" className="block text-xl font-bold text-[#780000] text-left w-full mb-1">
                Angkatan
              </label>
              <select
                id="angkatan"
                name="angkatan"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
              >
                <option value="">Pilih tahun angkatan</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div className="mt-8 p-4 flex items-center gap-7 justify-center">
              <button
                type="button"
                className="px-6 py-2.5 bg-white border border-[#780000] text-[#780000] font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                style={{
                  boxShadow: "4px 4px 0px #000000", 
                }}
              >
                KEMBALI
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#780000] text-white font-medium text-xs leading-tight uppercase rounded shadow-none hover:bg-[#990000] focus:bg-[#990000] focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                style={{
                  boxShadow: "4px 4px 0px #000000",
                }}
              >
                LANJUT PEMBAYARAN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

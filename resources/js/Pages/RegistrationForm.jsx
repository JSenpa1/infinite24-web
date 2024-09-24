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
    // Handle form submission
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#003049]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#003049]">
        <img src={polygon} alt="Polygon Background" className="w-full h-full object-cover" />
      </div>



      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <img
            src={infinite}
            alt="Infinite"
            className="flex justify-center items-center mt-20 z-20 w-72"
        />
        <div
          className="w-full max-w-xl min-h-[450px] p-8 rounded-lg shadow-lg bg-white z-10 relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${paperForm})` }}
        >

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="mt-8 flex flex-col items-start">
              <label
                htmlFor="nama"
                className="block text-xl font-bold text-[#780000] text-left w-full mb-1
                sm:text-base md:text-lg lg:text-xl"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Isi nama disini"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                sm:text-xs md:text-sm lg:text-base"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="nim"
                className="block text-xl font-bold text-[#780000] text-left w-full mb-1
                sm:text-base md:text-lg lg:text-xl"
              >
                NIM
              </label>
              <input
                type="number"
                id="nim"
                name="nim"
                placeholder="Isi NIM disini"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                sm:text-xs md:text-sm lg:text-base"
                required
                min="0"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="angkatan"
                className="block text-xl font-bold text-[#780000] text-left w-full mb-1
                sm:text-base md:text-lg lg:text-xl"
              >
                Angkatan
              </label>
              <select
                id="angkatan"
                name="angkatan"
                className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                sm:text-xs md:text-sm lg:text-base"
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
                className="px-6 py-2.5 bg-white border border-[#780000] text-[#780000] font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
                sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-5 md:py-2.5 lg:text-base lg:px-6 lg:py-2.5"
                style={{
                  boxShadow: "4px 4px 0px #000000",
                }}
              >
                KEMBALI
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#780000] text-white font-medium text-xs leading-tight uppercase rounded shadow-none hover:bg-[#990000] focus:bg-[#990000] focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out
                sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-5 md:py-2.5 lg:text-base lg:px-6 lg:py-2.5"
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

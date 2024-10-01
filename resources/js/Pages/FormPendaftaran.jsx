import React, { useState } from 'react'
import axios from 'axios';
import paperForm from "../../../public/assets/paper form.png";
import infinite from "../../../public/assets/infinite.png";
import polygon from "../../../public/assets/polygon.png";
import NavBar from '@/Components/Navbar/NavbarFixed';
import infiniteLogo from "../../../public/assets/infinite is here.png";
import rocketCursor from "../../../public/assets/rocket cursor.png";
import turtle from "../../../public/assets/turtle.png";
import yakaliGaIkutan from "../../../public/assets/yakali ga ikutan.png";
import v4 from "../../../public/assets/V.4.png";
import globe from "../../../public/assets/globe.png";
import { Link } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

function FormPendaftaran() {

    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        angkatan: '',
        email: '',
    });

    const [token, setToken] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
        console.log(formData.nama);
        console.log(formData.nim);
        console.log(formData.angkatan);
        console.log(formData.email);
    };

    const handleInputData = async () => {
      try {
        const res2 = await axios.get("/api/inputPeserta", {
          params: {
            nama: formData.nama,
            nim: formData.nim,
            angkatan: formData.angkatan,
            email: formData.email,
          }
        });
        console.log(res2.data);
      } catch (error) {
        console.log(error);
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted Form: ', formData);
        try {
            const res = await axios.post("/api/mid", {
                nama: formData.nama,
                nim: formData.nim,
                angkatan: formData.angkatan,
                email: formData.email,
            });
            setToken(res.data);
            console.log(token);
            window.snap.pay(token, {
              onSuccess: function(result){
                /* You may add your own implementation here */
                alert("Pembayaran Berhasil"); console.log(result);
                handleInputData();
                window.location.href='/PembayaranDone';
              },
              onPending: function(result){
                /* You may add your own implementation here */
                alert("Menunggu Pembayaran!"); console.log(result);
              },
              onError: function(result){
                /* You may add your own implementation here */
                alert("Pembayaran Gagal"); console.log(result);
              },
              onClose: function(){
                /* You may add your own implementation here */
                alert('Kamu belum selesai bayar :(');
              }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Head title='Form Pendaftaran' />
        <div className="relative md:h-screen h-fit">
        <NavBar />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#003049]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#003049]">
          <img src={polygon} alt="Polygon Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 mt-4">

        <img src={infiniteLogo} className='absolute top-70 left-8 hidden md:block' />

        <img src={rocketCursor} className='absolute bottom-52 left-52 hidden md:block' />

        <img src={turtle} className='absolute bottom-3 left-0 hidden md:block' />

        <img src={yakaliGaIkutan} className='absolute top-40 right-0 hidden md:block' />

        <img src={v4} className='absolute bottom-3 right-3 hidden md:block' />

        <img src={globe} className='absolute bottom-12 2xl:bottom-0 right-32 hidden md:block' />

        <img
              src={infinite}
              alt="Infinite"
              className="flex justify-center items-center mt-20 z-20 w-72 md:absolute 2xl:top-14 top-[-50px]"
        />
          <div
            className="w-full max-w-xl min-h-[450px] p-8 rounded-lg shadow-lg bg-white z-10 relative bg-no-repeat bg-cover 2xl:mt-36 mt-8"
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
                  value={formData.nama}
                  onChange={handleChange}
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
                  value={formData.nim}
                  onChange={handleChange}
                  placeholder="Isi NIM disini"
                  className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                  sm:text-xs md:text-sm lg:text-base"
                  required
                  min="0"
                />
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="nim"
                  className="block text-xl font-bold text-[#780000] text-left w-full mb-1
                  sm:text-base md:text-lg lg:text-xl"
                >
                  Email Student
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Isi Email Student disini (Bukan Email Pribadi)"
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
                {/* <input
                  type="text"
                  id="angkatan"
                  name="angkatan"
                  value={formData.angkatan}
                  onChange={handleChange}
                  placeholder="Isi Angkatan disini"
                  className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                  sm:text-xs md:text-sm lg:text-base"
                  required
                  min="0"
                /> */}
                <select
                  id="angkatan"
                  name="angkatan"
                  value={formData.angkatan}
                  onChange={handleChange}
                  className="block w-full max-w-xl py-2.5 px-3 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer
                  sm:text-xs md:text-sm lg:text-base"
                >
                  <option value="">Pilih tahun angkatan</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">lainnya</option>
                </select>
              </div>
              <div className="mt-8 p-4 flex items-center gap-7 justify-center">
                <Link href="/">
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
                </Link>
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
      </>
  )
}

export default FormPendaftaran

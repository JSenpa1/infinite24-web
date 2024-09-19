import React, { useState } from 'react'
import axios from 'axios';

function FormPendaftaran() {

    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        angkatan: '',
    });

    const [token, setToken] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted Form: ', formData);
        try {
            const res = await axios.post("/api/mid", {
                nama: formData.nama,
                nim: formData.nim,
                angkatan: formData.angkatan,
            });

            setToken(res.data);
            console.log(token);
            window.snap.pay(token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor='nama' className='text-white'>Name:</label>
                <input
                    type='text'
                    id='nama'
                    name='nama'
                    value={formData.nama}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor='nim' className='text-white'>NIM:</label>
                <input
                    type='text'
                    id='nim'
                    name='nim'
                    value={formData.nim}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor='nim' className='text-white'>Angkatan:</label>
                <input
                    type='text'
                    id='angkatan'
                    name='angkatan'
                    value={formData.angkatan}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type='submit' className='text-white'>Submit</button>
        </form>
    </div>
  )
}

export default FormPendaftaran

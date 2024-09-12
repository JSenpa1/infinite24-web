import React, { useState } from 'react'

function FormPendaftaran() {

    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Form: ', formData);
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

            <button type='submit' className='text-white'>Submit</button>
        </form>
    </div>
  )
}

export default FormPendaftaran

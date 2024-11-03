import React, { useState } from 'react';
import QRScanner from '@/Components/QRscanner';

const Admin = () => {
    const [scannedData, setScannedData] = useState(null);

    const handleScan = (data) => {
        setScannedData(data);
        alert(`Scanned QR Code: ${data}`);
    };

    return (
        <div className="relative h-screen flex">
            {/* Overlay on the left */}
            <div className="w-[300px] h-full bg-gray-800 text-white p-4 fixed top-0 left-0 z-10 flex flex-col">
                <h1 className="text-2xl mb-4">QR Scanner</h1>
                {scannedData ? (
                    <p className="text-lg mt-2">Scanned Data: {scannedData}</p>
                ) : (
                    <p className="text-lg mt-2">No QR code scanned yet</p>
                )}
            </div>

            {/* QR Scanner with smaller view */}
            <div className="flex-1 ml-[300px] flex justify-center items-center bg-slate-500">
                <div className="w-[400px] h-[300px] rounded overflow-hidden">
                    <QRScanner onScan={handleScan} />
                </div>
            </div>
        </div>
    );
};

export default Admin;

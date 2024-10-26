import React, { useState } from 'react';
import QRScanner from '@/Components/QRscanner';

const Admin = () => {
    const [scannedData, setScannedData] = useState(null);

    const handleScan = (data) => {
        setScannedData(data);
        alert(`Scanned QR Code: ${data}`);
    };

    return (
        <div>
            <h1>QR Scanner</h1>
            <QRScanner onScan={handleScan} />
            {scannedData && <p>Scanned Data: {scannedData}</p>}
        </div>
    );
};

export default Admin;

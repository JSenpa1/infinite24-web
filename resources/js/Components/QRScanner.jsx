import React, { useEffect, useRef, useState } from 'react';
import Instascan from 'instascan';

const QRScanner = ({ onScan }) => {
    const videoRef = useRef(null);
    const [scanner, setScanner] = useState(null);

    useEffect(() => {
        // Dynamically load Instascan
        const loadInstascan = async () => {
            const Instascan = (await import('instascan')).default;
            const scanner = new Instascan.Scanner({ video: videoRef.current });
            setScanner(scanner);
        
            scanner.addListener('scan', content => {
                if (onScan) onScan(content);
            });
        
            Instascan.Camera.getCameras().then(cameras => {
                if (cameras.length > 0) {
                    scanner.start(cameras[0]);
                } else {
                    console.error("No cameras found.");
                }
            }).catch(e => console.error(e));
        };

        loadInstascan();

        // Cleanup scanner on component unmount
        return () => {
            if (scanner) scanner.stop();
        };
    }, [onScan]);

    return <video ref={videoRef} style={{ width: '100%' }} />;
};

export default QRScanner;

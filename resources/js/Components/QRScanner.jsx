import React, { useEffect, useRef, useState } from 'react';

const QRScanner = ({ onScan }) => {
    const videoRef = useRef(null);
    const [scanner, setScanner] = useState(null);

    useEffect(() => {
        // Dynamically load Instascan
        const loadInstascan = async () => {
            if (!window.Instascan) {
                console.error("Instascan not loaded");
                return;
            }

            const scanner = new window.Instascan.Scanner({ video: videoRef.current });
            setScanner(scanner);

            scanner.addListener('scan', content => {
                if (onScan) onScan(content);
            });

            // Request camera access and start scanning
            window.Instascan.Camera.getCameras().then(cameras => {
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

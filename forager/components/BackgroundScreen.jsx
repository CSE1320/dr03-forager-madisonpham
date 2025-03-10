// "use client";
// import React, { useState, useRef } from 'react';
// import Link from 'next/link';

// const BackgroundScreen = () => {
//     const [isCameraOn, setIsCameraOn] = useState(false);
//     const videoRef = useRef(null);

//     const startCamera = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             videoRef.current.srcObject = stream;
//             setIsCameraOn(true);
//         } catch (err) {
//             console.error('Error accessing camera: ', err);
//         }
//     };

//     const stopCamera = () => {
//         const stream = videoRef.current.srcObject;
//         const tracks = stream.getTracks();

//         tracks.forEach(track => track.stop());
//         videoRef.current.srcObject = null;
//         setIsCameraOn(false);
//     };

//     const backgroundScreenStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         fontFamily: 'Nunito',
//         position: 'relative',
//     };

//     const videoStyle = {
//         width: '100%',
//         height: '100%',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         zIndex: 1,
//     };

//     const buttonContainerStyle = {
//         position: 'absolute',
//         bottom: '20px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         zIndex: 2,
//     };

//     const circleButtonStyle = {
//         width: '60px',
//         height: '60px',
//         borderRadius: '50%',
//         backgroundColor: 'grey',
//         border: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer',
//         margin: '0 20px',
//         zIndex: 3,
//     };

//     const iconStyle = {
//         width: '40px',
//         height: '40px',
//         cursor: 'pointer',
//         zIndex: 3,
//     };

//     const topBarStyle = {
//         width: '40px',
//         height: '40px',
//         cursor: 'pointer',
//         zIndex: 3,
//     };

//     return (
//         <div style={backgroundScreenStyle}>
//             <Link href="/dashboard" passHref>
//                 <img src="/icons/back.svg" alt="Back navigation" style={topBarStyle} />
//             </Link>
//             <img src="/icons/flash.svg" alt="Flash button" style={topBarStyle} />
//             <div>
//                 <video ref={videoRef} autoPlay style={videoStyle} />
//             </div>
//             <div style={buttonContainerStyle}>
//                 <img src="/icons/album.svg" alt="Album" style={iconStyle} />
//                 <button onClick={isCameraOn ? stopCamera : startCamera} style={circleButtonStyle}>
//                     {isCameraOn ? 'Stop' : 'Start'}
//                 </button>
//                 <img src="/icons/flip.svg" alt="Flip" style={iconStyle} />
//             </div>
//         </div>
//     );
// };

// export default BackgroundScreen;
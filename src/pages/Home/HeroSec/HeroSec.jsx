

import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function HeroSec() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log(error);
      });
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

       
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      console.log("error");
    }
  };

  return (
    <section className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full min-w-full min-h-full object-fill"
          autoPlay
          loop
          playsInline
          muted
          controls={showControls} 
        >
          <source src='/images/home.mp4' type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 pointer-events: none"></div>
      </div>

      <button
        onClick={() => {
          toggleMute();
        }}
        className="z-50 absolute bottom-6 right-6 bg-black bg-opacity-60 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 flex items-center"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 flex flex-col items-start">
          <img
            src='/images/chessHome2.webp'
            alt="Chess Home 1"
            className="w-16 md:w-28 h-auto object-contain mb-4"
          />
          <div className="flex items-center">
            <div className="text-white text-left max-w-md">
              <h1 className="text-2xl md:text-3xl font-bold">
                Taste Of Italy <br /> Made In Saudi
              </h1>
            </div>
            <img
              src='/images/chessHome1.webp'
              alt="Chess Home 2"
              className="w-10 md:w-20 h-auto object-contain ml-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;

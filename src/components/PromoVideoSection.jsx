import React, { useRef } from 'react';

const PromoVideoSection = () => {
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <section className="relative w-full h-screen flex justify-center items-center">
            <video
                ref={videoRef}
                muted
                loop
                className="w-[70%] h-[90vh] object-cover"
            >
                <source src="/Background/ICE COMING SOON.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Play/Pause Button */}
            <button
                onClick={togglePlayPause}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded"
            >
                {videoRef.current && !videoRef.current.paused ? 'Pause' : 'Play'}
            </button>
        </section>
    );
};

export default PromoVideoSection;

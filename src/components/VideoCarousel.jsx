import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../contants/contants";
import { fa0 } from "@fortawesome/free-solid-svg-icons";

const VideoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef([]);

    useEffect(() => {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
            currentVideo.addEventListener('ended', handleVideoEnd);
            return () => currentVideo.removeEventListener('ended', handleVideoEnd);
        }
    }, [currentIndex]);

    const handleVideoEnd = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hightlightsSlides.length);
    };

    return (
        <div className="flex items-center overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider" className="sm:pr-20 pr-10 flex-shrink-0" style={{ width: '100%' }}>
                        <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline
                                    preload="auto"
                                    muted
                                    autoPlay
                                    loop={false}
                                    ref={(el) => (videoRefs.current[i] = el)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text) => (
                                    <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;

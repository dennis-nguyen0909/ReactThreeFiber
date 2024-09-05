import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import watchImg from '../../public/images/watch.svg'
import rightImg from '../../public/images/right.svg'
import VideoCarousel from "./VideoCarousel"
import { animateWithGsap } from "../contants/animations"
const Hightlights = ()=>{

    useGSAP(()=>{
        // gsap.to("#title", {
        //     opacity: 1,
        //     y: 0,
        //     delay: 0.25,
        //     scrollTrigger: {
        //       trigger: "#hightlights",
        //       start: "top 80%", // When the top of the section reaches 80% of the viewport height
        //     },
        //   });
      
        //   gsap.to(".link", {
        //     opacity: 1,
        //     y: 0,
        //     duration: 1,
        //     stagger: 0.25,
        //     scrollTrigger: {
        //       trigger: "#hightlights",
        //       start: "top 80%", // When the top of the section reaches 80% of the viewport height
        //     },
        //   });
        animateWithGsap('#title',{y:0,opacity:1})
        animateWithGsap('.link',{y:0,opacity:1})

    },[])

    return (
        <section id="hightlights" className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-20" style={{backgroundColor:"#0e0e0e"}} >
            <div className="screen-max-width d-flex flex-row">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20" >Get the hightlights.</h1>
                <div className="flex  flex-wrap items-end gap-5">
                        <p className="link text-sky-600 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
                            Watch the film
                            <img src={watchImg} alt="watch" className="ml-2" />
                        </p>
                        <p className="link text-sky-600 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
                            Watch the event
                            <img src={rightImg} alt="right" className="ml-2" />
                        </p>
                </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default Hightlights
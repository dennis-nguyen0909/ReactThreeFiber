import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../contants/animations";

const Features = ()=>{
    useGSAP(()=>{
        animateWithGsap('#features_title',{y:0,opacity:1})
    },[])
    return (
        <section className="h-full relative overflow-hidden sm:py-32 py-20 sm:px-10 px-5">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">Explore the full story.</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                    <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
                </div>
            </div>
            <div className="flex-center flex-col sm:px-10">
                <div className="relative h-[50vh] w-full flex items-center"></div>
            </div>
        </section>
    )
}

export default Features;
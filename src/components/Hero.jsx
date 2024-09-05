import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import heroVideo from '../../public/video/hero.mp4'
import smallHeroVideo from '../../public/video/small_hero.mp4'
import { useEffect, useState } from "react"
import { animateWithGsap } from "../contants/animations"
const Hero = ()=>{
    const [videoSrc,setVideoSrc]=useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useGSAP(()=>{
        gsap.to('#hero',{opacity:1,delay:1.5})
        gsap.to("#cta",{opacity:1,y:-50,delay:1.5})
        animateWithGsap('#hero',{y:0,opacity:1})
        animateWithGsap('#cta',{y:0,opacity:1})

    },[])

    const handleVideoSetSrc = ()=>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleVideoSetSrc)
        return ()=>{
            window.removeEventListener('resize',handleVideoSetSrc)
        }
    },[])
    return (
        <section className="w-full nav-height bg-black relative" >
                <div style={{display:"flex",width:"100%" ,flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}>
                        <p id="hero" className="hero-title translate-y-20 opacity-0">iPhone 15 Pro</p>
                        <div className="md:w-10/12 w-9/12">
                            <video autoPlay muted playsInline={true} key={videoSrc} >
                                <source  src={videoSrc} typeof="video/mp4"  />
                            </video>
                        </div>
                        <div id="cta" className="buy translate-y-20 opacity-0">
                            <a href="#hightlights" className="btn"> Buy</a>
                            <p className="font-normal text-xl"> From $199/month or $999</p>
                        </div>
                </div>
        </section>
    )
}
export default Hero

import React from "react"
import appleImg from '../../public/images/apple.png'
import cartImg from '../../public/images/cart3.jpg'
import searchImg from '../../public/images/search.png'
import '../App.css'
import { NavLists } from "../contants/contants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = ()=>{
    const scrollTo = (nav) => {
        console.log("nav",nav)
        const iPhoneElement = document.getElementById(nav);
        if (iPhoneElement) {
            iPhoneElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
            <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black ">
                <nav className="flex w-full screen-max-width items-center justify-center">
                    <img src={appleImg} width={35} height={'auto'} />
                    <div style={{display:"flex",gap:'50px'}} className="flex flex-1 justify-center max-sm:hidden">
                        {NavLists.map((nav,i)=>{
                            return(
                                <a className="nav-bar" key={i} onClick={()=>scrollTo(nav)}>{nav}</a>
                            )
                        })}
                    </div>
                    <div className="flex gap-5">
                        <FontAwesomeIcon icon={faCartShopping} width={30} height={30} size="large" />
                        <FontAwesomeIcon icon={faSearch}  width={30} height={30} size="large"/>
                    </div>
                </nav>
            </header>
    )

}

export default Header
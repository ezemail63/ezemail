
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser,faArrowRightFromBracket,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {React, useState} from 'react'
import $ from "jquery";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header =()=>{
    const router = useRouter()
    const [shHd, setshHd]= useState(true);
    const showMenu=()=>{
            setshHd(!shHd)
    }
    const Logout = ()=>{
        localStorage.clear();
        router.push("/")
    }
    const sideActive=()=>{
        if (window.innerWidth > 0 && window.innerWidth <= 991) {
            $(".expovent__sidebar").toggleClass("open");
        } else {
            $(".expovent__sidebar").toggleClass("collapsed");
        }
        $(".app__offcanvas-overlay").toggleClass("overlay-open");
    }
    const sideCanvasActive= () =>{ 
        $(".expovent__sidebar").removeClass("collapsed");
        $(".expovent__sidebar").removeClass("open");
        $(".app__offcanvas-overlay").removeClass("overlay-open");
    }
  return(
    <>
    <div className="app__header__area">
        <div className="app__header-inner">
            <div className="app__header-left">
            <a id="sidebar__active" className="app__header-toggle" href="#" onClick={sideActive}>
                <div className="bar-icon-2">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            </div>
            <div className="app__header-right">
            
            <div className="nav-item p-relative">
                <a id="userportfolio" href="#" onClick={()=>{
                    showMenu()
                }}>
                    <div className="user__portfolio">
                        <div className="user__portfolio-thumb">
                        <img src="/assets/images/login.png" alt=""/> 
                        </div>
                        <div className="user__content">
                        <span>{localStorage && localStorage.name ? localStorage.name : ''}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </a> 
                <div className="user__dropdown" style={{display:shHd ? 'none' : 'block'}}>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} /><Link href="/profile"> Profile</Link></li>
                        <li onClick={()=>{Logout()}}><FontAwesomeIcon icon={faArrowRightFromBracket} />Log out</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Header
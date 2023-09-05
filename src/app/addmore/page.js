"use client"
import Sidebaar from '../template/Sidebaar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React,useState } from 'react';
import $ from "jquery";
import Header from '../template/Header';

const Addmore=()=>{


      const sideCanvasActive= () =>{ 
            $(".expovent__sidebar").removeClass("collapsed");
            $(".expovent__sidebar").removeClass("open");
            $(".app__offcanvas-overlay").removeClass("overlay-open");
        
      }
 return(
    <>
      <div className='page_-full-wrapper'>
           <Sidebaar/>
            <div className="app__offcanvas-overlay" onClick={sideCanvasActive}></div>
            <div className="page__body-wrapper">
               <Header/>
            </div>
         </div>
    </>
 )


}
export default Addmore
import React from "react";

import "../styles/App.css";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";


import { FcNightPortrait, FcCheckmark, FcLock } from 'react-icons/fc';
import { BackgroundRemove } from "../components/BackgroundRegister";
import { BackgroundRemove as BackgroundRemoveLogin } from "../components/Background";
import Footer from "./footer";

import Highlighted from "./HighlightedProfiles";


export default function Notfound() {
  BackgroundRemove(); BackgroundRemoveLogin();

  return (
    <div className="App">
      <NavBar />

      <div className="row">


        <div className="Highlighted">
          <h2>Our <span>Mission And</span> Vision</h2>

          <p className="text-center" style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}  >Our technology and people ensure complete support to help you find your partner.</p>
        </div>
        {/* <div className="col s12">This div is 12-columns wide on all screen sizes</div> */}
        <div className="col s6">


          <p>Our primary aim is to build a large free Matrimony web portal and provide a pleasant, satisfying, and superior matchmaking experience for all Keralite youths.</p> <p> Clearly we place high priority on user privacy. We also give our customers complete control over their profile through easy to use interfaces and features that can help them identify, filter and get in touch with potential partners.</p>
        </div>
        <div className="col s6">

          <img src="https://nestmatrimony.com/resources/images/nest-love.png" alt="Love" class="m-auto"></img>

        </div>

      </div>
      <Footer/>
      
    </div>
  )
}

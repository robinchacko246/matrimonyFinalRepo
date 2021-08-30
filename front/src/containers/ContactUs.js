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
          <h2>What Makes <span>Holy Matrimony</span> Special</h2>

          <p className="text-center" style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}  >Our technology and people ensure complete support to help you find your partner.</p>
        </div>
        {/* <div className="col s12">This div is 12-columns wide on all screen sizes</div> */}
        <div className="col s6">


          <h5 className="Highlighted1"><FcNightPortrait /> Sign In </h5>
          <p className="position-relative">Register for free &amp; put up your Profile</p>
          <h5 className="Highlighted1"><FcCheckmark /> Connect </h5>
          <p className="position-relative">Select & Connect with Matches you like </p>
          <h5 className="Highlighted1"><FcLock /> Secured</h5>
          <p className="position-relative">The data you choose to share with us is safe and secure.</p>
        </div>
        <div className="col s6">

          <img src="https://nestmatrimony.com/resources/images/nest-love.png" alt="Love" class="m-auto"></img>

        </div>

      </div>
      <Footer/>
      
    </div>
  )
}

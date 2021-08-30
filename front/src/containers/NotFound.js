import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

const Notfound = () => (
  <div>
      <NavBar />
      <div className="div-centered">
   
   <h1>Page not found :(</h1>
   <NavLink to="/" className="pink-link">
     Go back to homepage
   </NavLink>
 </div>
  </div>

);

export default Notfound;

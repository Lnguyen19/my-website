import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './navBar.css'



//import './navBar.css'
// NavBar.js


const NavBar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id='menu' class="navbar navbar-expand-lg navbar-light"  >
  <div class="container-fluid">
    <a class="navbar-brand " href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav " style = {{fontWeight:'bold'}}>
        <li class="nav-item " >
          <a class="nav-link ho" aria-current="page" onClick={() => scrollTo('intro')}style = {{frontWeight:'bold'}} ><i class="bi bi-house-check-fill "></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho" onClick={() => scrollTo('skill')}> <i class="bi bi-hammer"></i>My Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho" onClick={() => scrollTo('skills')}> <i class="bi bi-pc-display-horizontal"></i> My Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho"  onClick={() => scrollTo('aboutMe')}> <i class="bi bi-person-lines-fill"></i>About Me</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link ho"  onClick={() => scrollTo('contact')} > <i class="bi bi-person-rolodex"></i>Contact</a>
        </li>
        
        
        <li class="nav-item">
          <a class="nav-link" href="#" ></a>
        </li>
       



      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavBar;



import React from "react";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>

export default function Home() {
    return (
        <nav class="navbar navbar-expand-sm bg-info navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img src="http://2.bp.blogspot.com/-CBWcgKKbM1s/VCEOmFiympI/AAAAAAAAOxo/W-fhGG-ahjY/w1200-h630-p-k-no-nu/PTN%2Bphuonghai.jpg" alt="Logo" style={{ width: 70, height: 50 }} class="rounded-pill" />

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon">
          
      </span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/devices">OMS</a>
        </li> 
       
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>   */}
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{float: 'right'}}>smartpH</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/signin">Sign In</a></li>
            <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
            <li><a class="dropdown-item" href="/logout">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
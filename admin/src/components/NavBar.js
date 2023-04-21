import React from 'react'

export default function Navbar() {
    return (
        <div>



<nav class="navbar navbar-expand-lg">
        <div class="container">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <img src="../images/sprmeLogo.png"  width="70" height="70"/>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">dashboard</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/deliver">delivery</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/empDashboard">empDashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/empLogin">empLogin</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/employee">employee</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/finance">finance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/inventory">inventory</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sales">sales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/supplier">supplier</a>
              </li>
              
                     
            </ul>
          </div>
        </div>
      </nav>


        </div>
    )
}


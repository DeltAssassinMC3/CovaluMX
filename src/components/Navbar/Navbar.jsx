import React from 'react';
import '../../assets/styles/components/Navbar.scss';
import '../../App'
// import '../../loginvista.html'
// import login from '../login/login'

const Navbar = () => {
 
 
 return( <nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
       data-target="#nav-icon-collapse" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" > </span>
        <span className="icon-bar" > </span>
        <span className="icon-bar" > </span>
        <span className="icon-bar" > </span>
      </button>
      <a class="logo" href="/#">
        <img src="./static/logo_nav2.png" alt="logo"/></a>
      {/* <img src={logo} alt="logo" /> */}
    </div>
    <div className="collapse navbar-collapse" id="nav-icon-collapse">

      <ul className="nav navbar-nav navbar-right">
        <li><a href="/#" data-scroll-nav={0} className="active">Home</a></li>
        <li><a href="/#" data-scroll-nav={1}>Nosotros</a></li>
        <li><a href="/#" data-scroll-nav={2}>Servicios</a></li>
        <li><a href="/#" data-scroll-nav={3}>Demo</a></li>
        <li><a href="/#" data-scroll-nav={4}>Contacto</a></li>
        <li><a href="https://covaprueba.000webhostapp.com/login.php" target="_blank" rel="noopener noreferrer">Soporte</a></li>
  
        {/* <li><a href="./loginvista.html">Soporte</a></li> */}
 
        
      </ul>
    </div>
  </div>
</nav>)

};

export default Navbar;
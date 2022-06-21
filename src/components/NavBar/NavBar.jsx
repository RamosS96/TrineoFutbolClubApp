import React from 'react';
import './NavBar.css';
import logo from '../../img/common/logoTrineo.jpg';



function NavBar() {
  return (
    <nav className='navbar container'>
      <a href='#home'><img 
      src={logo} 
      alt='Logo Trineo'
      className='navbar-img'
      /></a>
      <ul className='navbar-list'>
        <li className='navbar-item'><a href='./'>Noticias</a></li>
        <li className='navbar-item'><a href='./matches'>Partidos</a></li>
        <li className='navbar-item'><a href='./players'>Plantel</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
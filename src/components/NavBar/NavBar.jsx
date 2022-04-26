import React from 'react';
import './NavBar.css';
import logo from '../../img/common/logoTrineo.jpg';

function NavBar(props) {
  return (
    <nav className='navbar'>
      <img 
      src={logo} 
      alt='Logo Trineo'
      className='navbar-img'/>
      <ul className='navbar-list'>
        <li className='navbar-item'>Noticias</li>
        <li className='navbar-item'>Partidos</li>
        <li className='navbar-item'>Plantel</li>
      </ul>
    </nav>
  );
}

export default NavBar;
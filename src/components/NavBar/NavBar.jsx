import React from 'react';
import './NavBar.css';
import logo from '../../img/common/logoTrineo.jpg';

function NavBar({ref1,ref2,ref3}) {
  return (
    <nav className='navbar'>
      <img 
      src={logo} 
      alt='Logo Trineo'
      className='navbar-img'/>
      <ul className='navbar-list'>
        <li className='navbar-item'><a href={ref1}>Noticias</a></li>
        <li className='navbar-item'><a href={ref2}>Partidos</a></li>
        <li className='navbar-item'><a href={ref3}>Plantel</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
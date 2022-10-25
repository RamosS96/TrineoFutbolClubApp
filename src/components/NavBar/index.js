import React from 'react';
import './styled.js';
import logo from '../../img/common/logoTrineo.jpg';
import 'animate.css';
import { Nav, NavbarA, NavbarImg, NavbarLi, NavbarListA, NavbarUl } from './styled.js';

function NavBar() {
  return (
    <Nav>
      <NavbarA href='/'><NavbarImg 
      src={logo} 
      alt='Logo Trineo'
      /></NavbarA>
      <NavbarUl>
        <NavbarLi><NavbarListA href='/notices'>Noticias</NavbarListA></NavbarLi>
        <NavbarLi><NavbarListA href='/matches'>Partidos</NavbarListA></NavbarLi>
        <NavbarLi><NavbarListA href='/players'>Plantel</NavbarListA></NavbarLi>
      </NavbarUl>
    </Nav>
  );
}

export default NavBar;
import styled from "styled-components";
import {colors} from "../../utils/colors";

export const Nav = styled.nav`
  justify-content: space-between;
  background-color: ${colors.hbrown};
  display: flex;
  margin-top: 0;
  min-width: 100%;
  position: fixed;
  z-index: 999  ;
  align-items: center;
  padding: 2px 0px;
`
export const NavbarA = styled.a`
  margin: 0px;
  padding: 0px;
`

export const NavbarImg = styled.img`
  padding: 0px 3px;
  height: 75px;
  height: 75px;
`

export const NavbarLi = styled.li`
  display: inline-block;
  text-decoration: none;
  margin: 0px 5px;
`

export const NavbarListA = styled.a`
  font-size: 1.5em;
  text-decoration: none;
  color: ${colors.white};
  &:hover{
    text-decoration: none;
    color: ${colors.lbrown}
  }
`
export const NavbarUl = styled.a`
  align-items: center;
  display: block;
  justify-content: right;
  margin-right: 5px;
  margin-left: 0px;
  padding: 0px;
  text-decoration: none
`
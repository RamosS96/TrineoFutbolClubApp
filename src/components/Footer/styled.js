import styled from "styled-components";
import { colors } from "../../utils/colors";

export const FooterContainer = styled.footer`
  background-color: ${colors.lbrown};
  color: ${colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-bottom: 0;
  position: relative;
  bottom: 0;
  width: 100%
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`

export const LinksSocial = styled.a`
  color: ${colors.hbrown};
  text-decoration: none;
  &:hover{
    text-decoration: none;
    color: ${colors.black}
  }
`
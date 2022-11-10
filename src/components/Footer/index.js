import React from 'react';
import { FooterContainer, SocialContainer, LinksSocial } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faTwitterSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <p>Seguinos en: </p>
      <SocialContainer>
        <LinksSocial target="_blank" href="https://www.instagram.com/trineofc/"><FontAwesomeIcon size='2x' icon={faInstagram} /></LinksSocial>
        <LinksSocial><FontAwesomeIcon size='2x' icon={faTwitch} /></LinksSocial>
        <LinksSocial><FontAwesomeIcon size='2x' icon={faTwitterSquare} /></LinksSocial>
        <LinksSocial><FontAwesomeIcon size='2x' icon={faFacebookSquare} /></LinksSocial>
        <LinksSocial></LinksSocial>
      </SocialContainer>
    </FooterContainer>
  );
}

export default Footer;
import React from 'react';
import './slider.css';
import { ContenedorSlider, Slides, TrackerSlider } from './styled'
import { SponsorLogo } from '../Sponsor/styled'

function Slider() {
  return (

    <ContenedorSlider className='slider'>
      <TrackerSlider className='slide-track'>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Bayer.svg.png?alt=media&token=d08e8d96-a07c-4466-ae67-9ff66bd399da" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Adidas.png?alt=media&token=08f848a3-90c1-4510-afd9-40d4e6dd286f" />
        </Slides><Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Bayer.svg.png?alt=media&token=d08e8d96-a07c-4466-ae67-9ff66bd399da" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Adidas.png?alt=media&token=08f848a3-90c1-4510-afd9-40d4e6dd286f" />
        </Slides>
      </TrackerSlider>
    </ContenedorSlider>

  );
}

export default Slider;



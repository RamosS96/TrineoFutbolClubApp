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
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FmacuLogo.jpg?alt=media&token=ce743859-b688-4707-831f-b6b92aca0289" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2Fbet365logo.jpg?alt=media&token=2241081b-b545-4800-bf40-7090a11979f4" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo-cerveza-brahma.svg.png?alt=media&token=6c0eb705-2d76-42f1-b618-37bb6a3fd546" />
        </Slides><Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Bayer.svg.png?alt=media&token=d08e8d96-a07c-4466-ae67-9ff66bd399da" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo_Adidas.png?alt=media&token=08f848a3-90c1-4510-afd9-40d4e6dd286f" />
        </Slides><Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FmacuLogo.jpg?alt=media&token=ce743859-b688-4707-831f-b6b92aca0289" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2Fbet365logo.jpg?alt=media&token=2241081b-b545-4800-bf40-7090a11979f4" />
        </Slides>
        <Slides className='slide'>
          <SponsorLogo src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FLogo-cerveza-brahma.svg.png?alt=media&token=6c0eb705-2d76-42f1-b618-37bb6a3fd546" />
        </Slides>
      </TrackerSlider>
    </ContenedorSlider>

  );
}

export default Slider;



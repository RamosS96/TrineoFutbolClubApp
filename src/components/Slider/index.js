import React from 'react';
import './slider.css';
import { Sliderer, Slides } from './styled'
import { Container } from '../Container';
import SponsorL from '../Sponsor';

function Slider() {
  return (
    <Container>
      <Sliderer>
        <Slides>
          <SponsorL src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" height="100" width="250" alt="" />
        </Slides>
        <Slides>
          <SponsorL src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" height="100" width="250" alt="" />
        </Slides>
        <Slides>
          <SponsorL src="https://firebasestorage.googleapis.com/v0/b/trineo-app.appspot.com/o/sponsorsLogo%2FRiot_Games-Logo.wine.png?alt=media&token=f30ab246-4ed9-4349-9917-5368cb61874d" height="100" width="250" alt="" />
        </Slides>
      </Sliderer>
    </Container>
  );
}

export default Slider;



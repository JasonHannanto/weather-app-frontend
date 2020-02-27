
import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUmbrellaBeach, faBasketballBall, faCalculator } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

function Navbar() {
  return (
    <ButtonToolbar className="navbar">
      <ButtonGroup size="lg" className="buttonGroup">
        <Button href="/"><FontAwesomeIcon icon={faHome} size="2x" /></Button>
        <Button href="/vacation"><FontAwesomeIcon icon={faUmbrellaBeach} size="2x" /></Button>
        <Button href="/activity"><FontAwesomeIcon icon={faBasketballBall} size="2x" /></Button>
        <Button href="/analysis"><FontAwesomeIcon icon={faCalculator} size="2x" /></Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Navbar;


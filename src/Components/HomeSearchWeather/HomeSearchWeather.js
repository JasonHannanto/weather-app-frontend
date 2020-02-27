import React from 'react';
import "./HomeSearchWeather.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormControl, InputGroup, Button } from 'react-bootstrap';

function HomeSearchWeather() {
  return (
    <div className="mainInput">
      <InputGroup size="lg" id="searchInput">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter location (City or ZIP)"
        />
      </InputGroup>
      <div className="bottomInput">
        <Button className="submitBtn" type="submit" >Show me the weather</Button>
      </div>


    </div>
  );
}

export default HomeSearchWeather;


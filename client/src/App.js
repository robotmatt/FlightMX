import React from 'react';
import background from './assets/images/sr71.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import AircraftList from './Components/AircraftList';
import AircraftInput from './Components/AircraftInput';
import AircraftDelete from './Components/AircraftDelete';
// import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron>
          <h2>FlightMX</h2>
          <p>by the A-Team! We pity the foo...</p>
          <Button>Bootstrap Button</Button>
        </Jumbotron>
        <AircraftInput />
        <AircraftList />
        <AircraftDelete />
        <img src={background} className="App-logo" alt="logo" />
      </header>
    </div >
  );
}

export default App;

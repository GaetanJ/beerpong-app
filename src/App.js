import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import StyledButton from './components/styledComponents/StyledButton'



import BeerGlass from './components/beerGlass/BeerGlass'

import './App.css';
import './ressources/fonts/Heineken/font-heineken.css'



class App extends Component {

  

  render() {
    return (
        <div className="App">

          <header className="App-header">

            <h1 className="appName">
              BEERPONG TOURNEMENT
            </h1>

            <div className="App-body">

              <BeerGlass></BeerGlass>

              <div className="buttonBar">
                <Link to="/conf" style={{ textDecoration: 'none' }}>
                  <StyledButton variant="contained" size="large">
                    NEW
                  </StyledButton>
                </Link>

                <Link to="/launch" style={{ textDecoration: 'none' }}>
                  <StyledButton variant="contained" size="large" className="animatedHover">
                    Launch
                  </StyledButton>
                </Link>
              </div>
            </div>
          </header>

          <footer className="App-footer">
            <i>Made by Gaëtan.J & Killian.M</i>
          </footer>

        </div>
    );
  }


}


export default App;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import BeerGlass from './components/beerGlass/BeerGlass'

import './App.css';
import './ressources/fonts/Heineken/font-heineken.css'

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">

          <h1 className="appName inner">
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

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #bc7012 30%, #efd002 90%)',
    borderRadius: 3,
    border: 0,
    height: 64,
    width: 256,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(75, 45, 6, 0.7)',
    transition: 'transform 300ms',
    '&:hover': {
      backgroundColor: 'red',
    } 
  },
  label: {
    color: '#444444',
    fontSize: '48px',
    fontWeight: 'bolder',
    textTransform: 'upperCase',
  }
})(Button);


export default App;
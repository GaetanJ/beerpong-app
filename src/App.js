import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <div className="buttonBar">
            <Link to="/conf">
              <Button variant="contained" color="primary">
                NEW
            </Button>
            </Link>

            <Link to="/launch">
              <Button variant="contained" color="primary">
                Launch
            </Button>
            </Link>
          </div>



        </header>

      </div>
    );
  }


}


export default App;


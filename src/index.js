import React from 'react';
import ReactDOM from'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import './index.css';
import App from './App';
import ConfTournament from './components/confTournamant/ConfTournament'
import Pool from './components/pool/pool'
import Recap from './components/recap/Recap'
import NotFound from './components/notFound/NotFound'
import * as serviceWorker from './serviceWorker';


const theme = createMuiTheme({
    palette: {
      primary: { light: '#bc7012', main: '#bc7012', dark: '#bc7012' },
      secondary: { light: '#000000', main: '#000000', dark: '#000000' },
      background: { default: '#2c2c2c' }
    },
    status: {
      danger: 'orange',
    }
  });

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/conf" component={ConfTournament} />
                <Route path="/pool" component={Pool} />
                <Route path="/recap" component={Recap} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

const styledApp = (
    <MuiThemeProvider theme={theme}>  
        <CssBaseline />
        {routing}
    </MuiThemeProvider>
)

ReactDOM.render(styledApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

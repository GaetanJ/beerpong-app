import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import ConfTournament from './components/confTournamant/ConfTournament'
import Pool from './components/pool/pool'
import Recap from './components/recap/Recap'
import NotFound from './components/notFound/NotFound'
import * as serviceWorker from './serviceWorker';


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

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

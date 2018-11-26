import React from 'react'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';

import IconButton from '@material-ui/core/IconButton';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


import Match from './match/Match'

import './pool.css'


class Pool extends React.Component {
  
  constructor() {
    super();
    this.state = {
      next: 0,
      hasNext: true,
      previous: 0,
      hasPrevious: true,
      pool: {
        name: "",
        teams: [],
        matches: []
      }
    }
  }
  
  resetState = data => {
    this.setState({ pool: data })
    this.setState({ previous: data.id-1})
    this.setState({ next: data.id+1})
    if ( this.state.previous < 1 ) {
      this.setState({ hasPrevious: false })
    }
    else {
      this.setState({ hasPrevious: true })
    }
    if ( this.state.next > 16 ) {
      this.setState({ hasNext: false })
    }
    else {
      this.setState({ hasNext: true })
    }
  }  
  
  componentDidMount() {
    
    fetch('http://localhost:5000/api/tournament' + this.props.location.pathname)
    .then(response => response.json())
    .then(data => this.resetState(data))    
  }
  
  updatePoolPrevious = () => {
    
    fetch('http://localhost:5000/api/tournament/pool/' + this.state.previous)
    .then(response => response.json())
    .then(data => this.resetState(data))  
  }
  
  updatePoolNext = () => {
    
    fetch('http://localhost:5000/api/tournament/pool/' + this.state.next)
    .then(response => response.json())
    .then(data => this.resetState(data))  
  }
  
  handleUpdateMatch = () => {
    
    fetch('http://localhost:5000/api/tournament' + this.props.location.pathname)
    .then(response => response.json())
    .then(data => {
      this.setState({ pool: data })
    })
  }
  
  render() {
    
    return (
      <div className="pool">
        <div className="homeButton">
          <Link to={"/recap"}>
            <IconButton color="primary" component="span">
            <ViewModuleIcon />
            </IconButton>
          </Link>
        </div>
      <div className="table">
        <Paper>
          <div className="previousButton">
            {this.state.hasPrevious &&  <Link to={"/pool/" + this.state.previous} onClick={this.updatePoolPrevious}>
              <IconButton color="primary" component="span">
                <NavigateBeforeIcon />
              </IconButton>
            </Link>}
            {!this.state.hasPrevious && 
              <IconButton disabled color="primary" component="span">
                <NavigateBeforeIcon />
              </IconButton>}
          </div>
          <div className="nextButton">
            {this.state.hasNext && <Link to={"/pool/" + this.state.next} onClick={this.updatePoolNext}>
              <IconButton color="primary" component="span">
                <NavigateNextIcon />
              </IconButton>
            </Link>}
            {!this.state.hasNext && 
              <IconButton disabled color="primary" component="span">
                <NavigateNextIcon />
              </IconButton>}
          </div>
          
          <h3>{this.state.pool.name}</h3>
          
          <Table>
          <TableHead>
          <TableRow>
          <TableCell></TableCell>
          <TableCell numeric>Pts</TableCell>
          <TableCell numeric>BP</TableCell>
          <TableCell numeric>BC</TableCell>
          <TableCell numeric>DB</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {this.state.pool.teams
            .sort(function (a, b) {
              if (a.points === b.points) {
                if((a.beerFor-a.beerAgainst) === (b.beerFor-b.beerAgainst)) {
                  if (a.beerFor === b.beerFor) {
                    return b.beerAgainst - a.beerAgainst;
                  }
                  return b.beerFor - a.beerFor;
                }
                return (b.beerFor-b.beerAgainst) - (a.beerFor-a.beerAgainst) 
              }
              return b.points - a.points;
            })
            .map((row) => {
              return (
                <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell numeric>{row.points}</TableCell>
                <TableCell numeric>{row.beerFor}</TableCell>
                <TableCell numeric>{row.beerAgainst}</TableCell>
                <TableCell numeric>{row.beerFor - row.beerAgainst}</TableCell>
                </TableRow>
                );
              })
            }
            </TableBody>
            </Table>
            </Paper>
          </div>
          <div className="table">
          <Paper>
          <h3>Résultats</h3>
          <List>
          {this.state.pool.matches
            .map((row) => {
              return (
                <div key={row.id}>
                <Match onUpdateMatch={ this.handleUpdateMatch } match={row}/>
                </div>
                );
              })
            }
            </List>
            </Paper>
            </div>
            </div>
            )
          }
        }
        
        
        export default Pool
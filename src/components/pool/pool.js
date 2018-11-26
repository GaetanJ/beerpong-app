import React from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';

import Match from './match/Match'


class Pool extends React.Component {

  constructor() {
    super();
    this.state = {
      pool: {
        name: "",
        teams: [],
        matches: []
      }
    }
  }

  componentDidMount() {

    fetch('http://localhost:5000/api/tournament' + this.props.location.pathname)
      .then(response => response.json())
      .then(data => {
        this.setState({ pool: data })
      })
      
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
        <div className="table">
          <Paper>
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
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import './Ranking.css';

class Ranking extends React.Component {


  render() {

    return (
        <div className="table">
            <Table>
                <TableBody>
                    {this.props.teams
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
                            </TableRow>
                            );
                    })}
                </TableBody>
            </Table>
        </div>            
    )
  }
}

export default Ranking



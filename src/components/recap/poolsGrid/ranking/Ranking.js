import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import './Ranking.css';

class Ranking extends React.Component {


  render() {

    console.log(this.props)

    return (
        <div className="table">
            <Table>
                <TableBody>
                    {this.props.teams
                        .sort(function (a, b) {
                         return b.points - a.points;
                        })
                        .map((row) => {
                        return (
                            <TableRow >
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



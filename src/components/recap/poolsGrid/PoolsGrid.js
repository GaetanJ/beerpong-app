import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


import Ranking from './ranking/Ranking'
import './PoolsGrid.css'

import '../../../ressources/fonts/Heineken/font-heineken.css'


class PoolsGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            tournamentName: "",
            pools: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/tournament/last')
            .then(response => response.json())
            .then(data => {
                this.setState({ tournamentName: data.name })
                this.setState({ pools: data.pools })
            });
    }

    render() {

        const pools = this.state.pools.map(pool => {
            return (
                <Paper key={pool.id}>
                    <h3 className="poolName">{pool.name}</h3>
                    <div>
                        <Ranking {...pool}></Ranking>
                    </div>
                    <Link to={"/pool/" + pool.id}>
                        <Button mini variant="text" color="default" aria-label="Add" className="fab">
                            <AddIcon />
                        </Button>
                    </Link>
                </Paper>
            )
        })


        return (
            <div className="pools">
                <h1 className="tournamentName">
                    {this.state.tournamentName}
                </h1>
                <div className="grid">{pools}</div>
            </div>

        )
    }
}

export default PoolsGrid
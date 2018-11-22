import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Ranking from './ranking/Ranking'
import './PoolsGrid.css'



class PoolsGrid extends React.Component {
    
    pools = [
        {
            "id": 1,
            "name": "Poule A",
            "teams": [
                {
                    "name": "Pingolins et sanglier le retour",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]
        },
        {
            "id": 2,
            "name": "Poule B",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 3,
            "name": "Poule C",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 4,
            "name": "Poule D",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 5,
            "name": "Poule E",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 6,
            "name": "Poule F",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 7,
            "name": "Poule G",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 8,
            "name": "Poule H",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 9,
            "name": "Poule I",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 10,
            "name": "Poule J",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 11,
            "name": "Poule K",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 12,
            "name": "Poule L",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 13,
            "name": "Poule M",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 14,
            "name": "Poule O",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 15,
            "name": "Poule P",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]    
        },
        {
            "id": 16,
            "name": "Poule Q",
            "teams": [
                {
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]
        }
    ]
    
    render() {
        
        const articles = this.pools.map(pool => {
            return (
                <Paper className='col-lg-4'>
                    <h3 className="poolName">{pool.name}</h3>
                    <div>
                        <Ranking {...pool}></Ranking>
                    </div>
                    <Link to={"/pool/"+ pool.id}>
                        <Button mini variant="text" color="default" aria-label="Add" className="fab">
                            <AddIcon />
                        </Button>
                    </Link>
                </Paper>
                )
        })  
        return (
            <div>
                <h1 className="tournamentTitle">Tournament name</h1>
                <div className="grid">{articles}</div>
            </div>
            
        )
    }
}

export default PoolsGrid
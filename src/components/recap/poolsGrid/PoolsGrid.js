import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Ranking from './ranking/Ranking'
import './PoolsGrid.css'

import '../../../ressources/fonts/Heineken/font-heineken.css'


class PoolsGrid extends React.Component {
    
    pools = [
        {
            "id": 1,
            "name": "Poule A",
            "teams": [
                {
                    "id": 1,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 2,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 3,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 4,
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
                    "id": 5,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 6,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 7,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 8,
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
                    "id": 9,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 10,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 11,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 12,
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
                    "id": 13,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 14,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 15,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 16,
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
                    "id": 17,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 18,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 19,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 20,
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
                    "id": 21,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 22,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 23,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 24,
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
                    "id": 25,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 26,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 27,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 28,
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
                    "id": 29,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 30,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 31,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 32,
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
                    "id": 33,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 34,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 35,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 36,
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
                    "id": 37,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 38,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 39,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 40,
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
                    "id": 41,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 42,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 43,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 44,
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
                    "id": 45,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 46,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 47,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 48,
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
                    "id": 49,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 50,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 51,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 52,
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
                    "id": 53,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 54,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 55,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 56,
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
                    "id": 57,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 58,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 59,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 60,
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
                    "id": 61,
                    "name": "Équipe 1",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 62,
                    "name": "Équipe 2",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 63,
                    "name": "Équipe 3",
                    "points": Math.floor(Math.random()*9+1)
                },
                {
                    "id": 64,
                    "name": "Équipe 4",
                    "points": Math.floor(Math.random()*9+1)
                }
            ]
        }
    ]
    
    render() {
        
        const articles = this.pools.map(pool => {
            return (
                <Paper key={pool.id}>
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
            <div className="pools">
                <h1 className="tournamentName">
                    Tournament name
                </h1>
                <div className="grid">{articles}</div>
            </div>
            
        )
    }
}

export default PoolsGrid
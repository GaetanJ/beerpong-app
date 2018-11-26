import React from 'react';
import Paper from '@material-ui/core/Paper'
import './BracketTree.css';

class BracketTree extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      teams: []
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/api/tournament/last')
    .then(response => response.json())
    .then(data => this.getFinalists(data));
  }
  
  getFinalists = data => {
    
    data.pools.forEach(pool => {
      pool.teams.sort(function (a, b) {
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

      var tmp = this.state.teams
      tmp.push(pool.teams[0]);
      tmp.push(pool.teams[1]);
      this.setState({ teams: tmp });
      
    });
  }
  
  
  
  render() {
    return [
      <Paper>
        {this.state.teams.forEach((element, index) => {
          return (
            <p key={this.state.teams[index].id}>
              {this.state.teams[index].name} - {this.state.teams[this.state.teams.length -1 - index].name}
            </p>
          )
        })}
        
      </Paper>
    ];
  }
  
}

export default BracketTree;
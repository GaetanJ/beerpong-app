import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';



import './Match.css';

class Match extends React.Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            order: 0,
            beerFor1: 0,
            beerFor2: 0,
            played: false
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.match.id });
        this.setState({ order: this.props.match.order });
        this.setState({ beerFor1: this.props.match.beerFor1 });
        this.setState({ beerFor2: this.props.match.beerFor2 });
        this.setState({ played: this.props.match.played });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    updateScore = () => {

        let opts = {
            "ID": this.state.id,
            "Order": this.state.order,
            "BeerFor1": this.state.beerFor1,
            "BeerFor2": this.state.beerFor2
        }

        fetch('http://localhost:5000/api/tournament/match/' + this.state.id, {
            method: 'put',
            body: JSON.stringify(opts),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            this.props.onUpdateMatch();
            this.setState({ played: true });
        })

    }

    editScore = () => {

        let opts = {
            "ID": this.state.id,
            "Order": this.state.order,
            "BeerFor1": this.state.beerFor1,
            "BeerFor2": this.state.beerFor2
        }

        fetch('http://localhost:5000/api/tournament/match/edit/' + this.state.id, {
            method: 'put',
            body: JSON.stringify(opts),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            this.props.onUpdateMatch();
        })

        
    }


    render() {

        return (
            <div className="match">
                <h4 className="teamName1">{this.props.match.team1.name}</h4>
                <TextField
                    id="outlined-number"
                    fullWidth
                    value={this.state.beerFor1}
                    onChange={this.handleChange('beerFor1')}
                    type="number"
                    margin="normal"
                    variant="outlined"
                />
                <div className="separator"></div>
                <TextField
                    id="outlined-number"
                    fullWidth
                    value={this.state.beerFor2}
                    onChange={this.handleChange('beerFor2')}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <div className="team2">
                    <h4 className="teamName2">{this.props.match.team2.name}</h4>
                    {!this.state.played && <IconButton color="primary" component="span" onClick={this.updateScore}>
                        <CheckIcon />
                    </IconButton>}
                    {this.state.played && <IconButton color="primary" component="span" onClick={this.editScore}>
                        <EditIcon />
                    </IconButton>}
                </div>
            </div>
        )
    }
}

export default Match;
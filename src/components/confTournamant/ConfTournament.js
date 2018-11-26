import React from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import StyledButton from '../styledComponents/StyledButton'
import './confTournament.css'


class ConfTournament extends React.Component {
  render() {
    return (
        <header className="App-header">

            <h1 className="appName">
              BEERPONG TOURNEMENT
            </h1>

            <div className="container">
                <Paper className="form"> 
            
                    <TextField
                        required
                        id="title-required"
                        label="Nom du tournoi"
                        defaultValue=""
                        margin="normal"
                    />
                    <TextField
                        required
                        multiline
                        id="title-required"
                        label="Noms des équipes"
                        defaultValue=""
                        margin="normal"
                    />
                </Paper>

                <StyledButton variant="contained" size="large">
                        CRÉER
                </StyledButton>
            </div>
        </header>
    )
  }
}
export default ConfTournament
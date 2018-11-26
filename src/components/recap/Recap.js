import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PoolsGrid from './poolsGrid/PoolsGrid'

const styles = {
  root: {
    flexGrow: 1,
  },
};



class Recap extends React.Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Poules" />
            <Tab label="Phases Finales" />
          </Tabs>
        </Paper>
        {value === 0 && <PoolsGrid></PoolsGrid>}
        {value === 1 && <div>Item Two</div>}
      </div>
      );
    }
  }
  
  Recap.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Recap);
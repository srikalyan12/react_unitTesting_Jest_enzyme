import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextDate from './TextDate';

import { validateData, dateDiffernce } from './helper/dateCalculation';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    margin: '20px 10px 15px 10px',
  },
  main: {
    magin: 'auto'
  },
  text: {
    textAlign: 'center'
  }
});

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date1: '',
      date2: '',
      diffDays: 0,
      errorDate1: false,
      errorDate2: false,
      errorMessage1:'',
      errorMessage2:''

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    const { errorDate : errorDate1, errorMessage : errorMessage1 } = validateData(this.state.date1);
    const { errorDate : errorDate2, errorMessage : errorMessage2 } = validateData(this.state.date2);

    if(errorMessage1 === 'ValidDate' && errorMessage2 === 'ValidDate') {
      const diffDays = dateDiffernce(this.state.date1, this.state.date2);
      this.setState({
        diffDays,
        errorDate1,
        errorDate2,
        errorMessage1,
        errorMessage2,
      });
    } else {
      this.setState({
        errorDate1,
        errorDate2,
        diffDays:0,
        errorMessage1,
        errorMessage2,
      });
    }
  }
  handleChange(event) {

    if (event.target.id === 'date1') {
      this.setState({
        date1: event.target.value
      });
    } else {
      this.setState({
        date2: event.target.value
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div data-test='component-main' className={ classes.main }>
        <form className={ classes.container } noValidate autoComplete="off">
          <TextDate data-test='component-TextDate1'
            id='date1'
            handleChange={ this.handleChange }
            errorDate={ this.state.errorDate1 }
            errorMessage={ this.state.errorMessage1 }
          />
          <TextDate data-test='component-TextDate2'
            id='date2'
            handleChange={ this.handleChange }
            errorDate={ this.state.errorDate2 }
            errorMessage={ this.state.errorMessage2 }
          />

          <Button data-test='button-Difference'
            size="small"
            variant="contained"
            color="primary"
            className={ classes.button }
            onClick={ this.onSubmit }
          >
            Find Date Difference
          </Button>
        </form>
        <div>

          <div>
            <Typography className={ classes.text } variant="h6" gutterBottom>
              { `Date Difference: ${ this.state.diffDays } days`}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  classes: propTypes.object
};
export default withStyles(styles)(App);

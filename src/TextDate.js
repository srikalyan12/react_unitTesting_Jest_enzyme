import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

export class TextDate extends React.Component {

  render() {
    const { classes } = this.props;
    return(
      <TextField data-test='text-date'
        error={ this.props.errorDate }
        required
        id={ this.props.id }
        label="DD MM YYYY"
        className={ classes.textField }
        onChange={  this.props.handleChange }
        margin="normal"
        variant="outlined"
        helperText={ this.props.errorDate ? this.props.errorMessage : '' }
      />
    );
  }
}

TextDate.propTypes = {
  id: PropTypes.string,
  errorDate: PropTypes.bool,
  classes: PropTypes.object,
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string,
};
TextDate.defaultProps = {
  id: 'date',
  errorDate: false,
  errorMessage: ''
};
export default withStyles(styles)(TextDate);

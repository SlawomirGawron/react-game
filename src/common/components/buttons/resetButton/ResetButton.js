import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function ResetButton(props) {
    return (
        <Button
            variant="outlined"
            color="inherit"
            className="tic-tac-toe-reset-button"
            onClick={props.onClick}
        >
            Reset
        </Button>
    )
}

ResetButton.propTypes = {
    onClick: PropTypes.func.isRequired
};


export default ResetButton;
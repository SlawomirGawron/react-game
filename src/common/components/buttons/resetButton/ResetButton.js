import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import "./ResetButton.scss";

const useStyles = makeStyles(theme => ({
    resetButton: {
        margin: theme.spacing(1),
        color: "black",
        border: "2px solid black"
    },
}));

function ResetButton(props) {
    const classes = useStyles();

    return (
        <Button
            className={classes.resetButton}
            id="reset-button"
            variant="outlined"
            color="inherit"
            onClick={props.onClick}
            href=""
        >
            Reset
        </Button>
    )
}

ResetButton.propTypes = {
    onClick: PropTypes.func.isRequired
};


export default ResetButton;
import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

import "./EndOfGameText.scss";

const styles = theme => ({
    rootGameStatus: {
        maxWidth: 800,
        padding: theme.spacing(1),
    },
    gameStatus: {
        [theme.breakpoints.up("xs")]: {
            fontSize: "1.3rem",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.7rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        }
    }
});

function EndOfGameText(props) {
    const { classes, gameStatus } = props;

    return (
        <div className={classes.rootGameStatus}>
            <Typography
                className={classes.gameStatus}
                variant="h4"
                gutterBottom
            >
                {gameStatus}
            </Typography>
        </div>
    )
}

EndOfGameText.propTypes = {
    classes: PropTypes.object.isRequired,
    gameStatus: PropTypes.string.isRequired
};

export default withStyles(styles)(EndOfGameText);
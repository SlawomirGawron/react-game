import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import "./Title.scss";

const styles = theme => ({
    rootTitle: {
        maxWidth: 800,
        fontFamily: "Comic Sans MS, cursive, sans-serif",
        fontSize: "34px",
        letterSpacing: "2px",
        wordSpacing: "2px",
        color: "white",
        fontWeight: "700",
        textDecoration: "none solid rgb(68, 68, 68)",
        fontStyle: "italic",
        fontVariant: "normal",
        textTransform: "none",
    },
    message: {
        [theme.breakpoints.up("xs")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",

        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "5rem",
        }
    }
});

function Title(props) {
    const { classes, text } = props;

    return (
        <div className={classes.rootTitle}>
            <Typography
                className={classes.message}
                variant="h2"
                component="h2"
                gutterBottom
            >
                {text}
            </Typography>
        </div>
    )
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles)(Title);
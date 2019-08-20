import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import "./Message.scss";

const styles = theme => ({
    rootMessage: {
        maxWidth: 800,
        padding: theme.spacing(1),
    },
    message: {
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

function Message(props) {
    const { classes, text } = props;

    return (
        <div className={classes.rootMessage}>
            <Typography
                className={classes.message}
                variant="h4"
                gutterBottom
            >
                {text}
            </Typography>
        </div>
    )
}

Message.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);

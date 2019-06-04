import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

function EndOfGameText(props) {
    return (
        <Typography variant="h4" component="h2" gutterBottom>
            Game Status: {props.gameStatus}
        </Typography>
    )
}

EndOfGameText.propTypes = {
    gameStatus: PropTypes.string.isRequired
};

export default EndOfGameText;
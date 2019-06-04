import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Title(props) {
    return (
        <Typography variant="h2" component="h2" gutterBottom>
            {props.text}
        </Typography>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Message(props) {
    return (
        <Typography variant="h4" component="h2" gutterBottom>
            {props.text}
        </Typography>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired
};

export default Message;
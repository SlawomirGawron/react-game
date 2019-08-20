import React from 'react';
import PropTypes from "prop-types";

import './Tile.scss';

function Tile(props) {
    return (
        <div
            key={props.tileIndexInGrid}
            className="tic-tac-toe-tile"
            onClick={() => props.onClickTile(props.tileIndexInGrid)}

        >
            {props.tileValue}
        </div>
    );
}

Tile.propTypes = {
    tileIndexInGrid: PropTypes.number.isRequired,
    tileValue: PropTypes.any,
    onClickTile: PropTypes.func.isRequired
};

export default Tile;
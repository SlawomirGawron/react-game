import React, { Component } from 'react';
import './GameBoard.scss';
import PropTypes from "prop-types";
import TileGrid from "./tileGrid/TileGrid";

class GameBoard extends Component {
    render() {
        return (
            <TileGrid
                arrayOfTileValues={this.props.arrayOfTileValues}
                numTiles={this.props.numTiles}
                onClickTile={this.props.onClickTile}
            />
        );
    }
}

GameBoard.propTypes = {
    arrayOfTileValues: PropTypes.array.isRequired,
    numTiles: PropTypes.number.isRequired,
    onClickTile: PropTypes.func.isRequired
};

export default GameBoard;
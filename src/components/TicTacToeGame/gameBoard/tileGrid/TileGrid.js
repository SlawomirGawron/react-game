import React, { Component } from 'react';
import './TileGrid.scss';
import PropTypes from "prop-types";
import Tile from "./tile/Tile";

class TileGrid extends Component {
    renderTiles() {
        const arrayOfTileValues = this.props.arrayOfTileValues;
        const onClickTile = this.props.onClickTile;

        return (
            arrayOfTileValues.map((tileValue, tileIndexInGrid) =>
                <Tile
                    key={tileIndexInGrid}
                    tileIndexInGrid={tileIndexInGrid}
                    tileValue={tileValue}
                    onClickTile={onClickTile}
                />
            )
        );

    }

    render() {
        return (
            <div className="tic-tac-toe-grid">
                {this.renderTiles()}
            </div>
        );
    }
}

TileGrid.propTypes = {
    arrayOfTileValues: PropTypes.array.isRequired,
    numTiles: PropTypes.number.isRequired,
    onClickTile: PropTypes.func.isRequired
};

export default TileGrid;
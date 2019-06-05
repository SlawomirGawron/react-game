import React, { Component } from 'react';
import './Tile.scss';
import PropTypes from "prop-types";

class Tile extends Component {
    render() {
        return (
            <div
                key={this.props.tileIndexInGrid}
                className="tic-tac-toe-tile"
                onClick={() => this.props.onClickTile(this.props.tileIndexInGrid)}
            >
                {this.props.tileValue}
            </div>
        );
    }
}

Tile.propTypes = {
    tileIndexInGrid: PropTypes.number.isRequired,
    tileValue: PropTypes.any,
    onClickTile: PropTypes.func.isRequired
};

export default Tile;
import React, { Component } from 'react';
import PropTypes from "prop-types";
import TileGrid from "./tileGrid/TileGrid";
import Tile from "src/TicTacToeGame/gameBoard/tileGrid/tile/Tile";
import {createArrayWithInitialValue} from "src/common/utilities/utilities";
import './GameBoard.scss';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardOfPlayerMoves: []
        };

        this.onClickTile = this.onClickTile.bind(this);
        this.initializeBoard = this.initializeBoard.bind(this);
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.checkForBoardReset = this.checkForBoardReset.bind(this);

    }

    componentDidMount() {
        this.initializeBoard();
    }

    initializeBoard() {
        this.setState({
            boardOfPlayerMoves: createArrayWithInitialValue(this.props.numTiles, null)
        });
    }

    updateGameBoard(tileIndex) {
        let updatedBoardOfPlayerMoves = this.state.boardOfPlayerMoves;
        updatedBoardOfPlayerMoves[tileIndex] = this.props.playerMakingMove;

        this.setState({
            boardOfPlayerMoves: updatedBoardOfPlayerMoves
        });
    }

    onClickTile(tileIndex) {
        const {boardOfPlayerMoves} = this.state;
        const { getGameStatus,
                isValidMoveOnBoard,
                updateGameStatus,
                analyzeGameBoardForEndConditions,
                updateToNextPlayerMakingMove,
                notEndOfGameCheck,
                convertGameStatusToInvalidMove } = this.props;

        if (notEndOfGameCheck(getGameStatus())) {
            if (isValidMoveOnBoard(tileIndex, boardOfPlayerMoves)) {
                this.updateGameBoard(tileIndex);
                updateGameStatus(analyzeGameBoardForEndConditions(boardOfPlayerMoves));
                updateToNextPlayerMakingMove();

            } else {
                convertGameStatusToInvalidMove();
            }
        }

    }

    checkForBoardReset() {
        const { getGameStatus,
                shouldGameBeReset,
                convertGameStatusToInProgress } = this.props;

        if (shouldGameBeReset(getGameStatus())) {
            this.initializeBoard();
            convertGameStatusToInProgress();
        }
    }

    componentDidUpdate() {
        this.checkForBoardReset();
    }

    render() {
        const {boardOfPlayerMoves} = this.state;

        return (
            <TileGrid>
                {boardOfPlayerMoves.map((tileValue, tileIndexInGrid) =>
                    <Tile
                        key={tileIndexInGrid}
                        tileIndexInGrid={tileIndexInGrid}
                        tileValue={tileValue}
                        onClickTile={this.onClickTile}
                    />
                )}
            </TileGrid>
        );
    }
}

GameBoard.propTypes = {
    playerMakingMove: PropTypes.string.isRequired,
    numTiles: PropTypes.number.isRequired,
    getGameStatus: PropTypes.func.isRequired,
    shouldGameBeReset: PropTypes.func.isRequired,
    updateGameStatus: PropTypes.func.isRequired,
    updateToNextPlayerMakingMove: PropTypes.func.isRequired,
    isValidMoveOnBoard: PropTypes.func.isRequired,
    analyzeGameBoardForEndConditions: PropTypes.func.isRequired,
    notEndOfGameCheck: PropTypes.func.isRequired,
    convertGameStatusToInProgress: PropTypes.func.isRequired,
    convertGameStatusToInvalidMove: PropTypes.func.isRequired
};

export default GameBoard;
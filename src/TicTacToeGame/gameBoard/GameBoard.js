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
        const { isValidMoveOnBoard,
                updateGameStatus,
                analyzeGameBoardForEndConditions,
                updateToNextPlayerMakingMove,
                endOfGameCheck } = this.props;

        if (isValidMoveOnBoard(tileIndex, boardOfPlayerMoves, updateGameStatus)) {
            this.updateGameBoard(tileIndex);
            updateGameStatus(analyzeGameBoardForEndConditions(boardOfPlayerMoves));
            updateToNextPlayerMakingMove();
            endOfGameCheck();
        }

    }

    checkForBoardReset() {
        const { gameStatus,
                shouldGameBeReset,
                updateGameStatus } = this.props;

        if (shouldGameBeReset(gameStatus, updateGameStatus)) {
            this.initializeBoard();
        }
    }

    render() {
        const {boardOfPlayerMoves} = this.state;
        this.checkForBoardReset();

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
    gameStatus: PropTypes.string.isRequired,
    playerMakingMove: PropTypes.string.isRequired,
    numTiles: PropTypes.number.isRequired,
    shouldGameBeReset: PropTypes.func.isRequired,
    updateGameStatus: PropTypes.func.isRequired,
    updateToNextPlayerMakingMove: PropTypes.func.isRequired,
    isValidMoveOnBoard: PropTypes.func.isRequired,
    analyzeGameBoardForEndConditions: PropTypes.func.isRequired,
    endOfGameCheck: PropTypes.func.isRequired,
};

export default GameBoard;
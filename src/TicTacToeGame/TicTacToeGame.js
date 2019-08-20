import React, { Component } from 'react';
import { analyzeGameBoardForEndConditions,
         isValidMoveOnBoard,
         shouldGameBeReset,
         notEndOfGameCheck } from './gameLogic/Logic';
import GameBoard from "./gameBoard/GameBoard";
import {gameStatusValues, players} from "src/common/utilities/ENUMS";
import Title from "src/common/components/text/title/Title";
import Message from "src/common/components/text/message/Message";
import ResetButton from "src/common/components/buttons/resetButton/ResetButton";
import EndOfGameText from "src/common/components/text/endOfGameText/EndOfGameText";


import './TicTacToeGame.scss';

const NUM_TILES = 9;

class TicTacToeGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: players.ONE,
            gameStatus: gameStatusValues.GAMEINPROGRESS,
        };

        this.updateGameStatus = this.updateGameStatus.bind(this);
        this.updateToNextPlayerMakingMove = this.updateToNextPlayerMakingMove.bind(this);
        this.resetButtonHandleClick = this.resetButtonHandleClick.bind(this);
        this.getGameStatus = this.getGameStatus.bind(this);
    }

    updateGameStatus(newValue) {
        this.setState({
            gameStatus: newValue
        });
    }

    getGameStatus() {
        const { gameStatus } = this.state;

        return gameStatus;
    }

    updateToNextPlayerMakingMove() {
        const {player} = this.state;

        if (player === players.ONE) {
            this.setState({
                player: players.TWO
            });
        } else {
            this.setState({
                player: players.ONE
            });
        }
    }

    resetButtonHandleClick() {
        this.setState({
            player: players.ONE,
            gameStatus: gameStatusValues.NEWGAME
        });
    }

    gameMessage() {
        const {gameStatus, player } = this.state;
        let messageToDisplay = "Game Status: " + gameStatus;

        if ( (gameStatus === gameStatusValues.NEWGAME)
             || (gameStatus === gameStatusValues.PLAYERONEWIN)
             || (gameStatus === gameStatusValues.PLAYERTWOWIN)
             || (gameStatus === gameStatusValues.TIE)
             || (gameStatus === gameStatusValues.ERROR)
        ) {
            return <EndOfGameText gameStatus={messageToDisplay}/>;

        } else if ( (gameStatus === gameStatusValues.GAMEINPROGRESS) ) {
            messageToDisplay = messageToDisplay + ", player " + player + " move.";
            return <Message text={messageToDisplay}/>;

        } else if ( (gameStatus === gameStatusValues.VALIDMOVE)
                    || (gameStatus === gameStatusValues.INVALIDMOVE)
        ) {
            return <Message text={messageToDisplay}/>;
        } else {
            return <EndOfGameText gameStatus={"Game Status: " + gameStatusValues.ERROR}/>;
        }
    }

    convertGameStatusToInProgress() {
        this.updateGameStatus(gameStatusValues.GAMEINPROGRESS);
    }

    convertGameStatusToInvalidMove() {
        this.updateGameStatus(gameStatusValues.INVALIDMOVE);
    }

    render() {
        const {player} = this.state;

        return (
            <div className="tic-tac-toe-container">
                <Title text="Tic Tac Toe Game"/>
                <hr />
                <ResetButton onClick={()=> this.resetButtonHandleClick()}/>
                <GameBoard
                    playerMakingMove={player}
                    numTiles={NUM_TILES}
                    getGameStatus={() => this.getGameStatus()}
                    updateGameStatus={(newValue) => this.updateGameStatus(newValue)}
                    updateToNextPlayerMakingMove={() => this.updateToNextPlayerMakingMove()}
                    shouldGameBeReset={(gameStatus, updateGameStatus) => shouldGameBeReset(gameStatus, updateGameStatus)}
                    isValidMoveOnBoard={(playerMove, board, updateGameStatus) => isValidMoveOnBoard(playerMove, board, updateGameStatus)}
                    analyzeGameBoardForEndConditions={(board) => analyzeGameBoardForEndConditions(board)}
                    notEndOfGameCheck={(gameStatus) => notEndOfGameCheck(gameStatus)}
                    convertGameStatusToInProgress={() => this.convertGameStatusToInProgress()}
                    convertGameStatusToInvalidMove={() => this.convertGameStatusToInvalidMove()}
                />
                {this.gameMessage()}
            </div>
        );
    }
}

export default TicTacToeGame;
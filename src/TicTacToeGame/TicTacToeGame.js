import React, { Component } from 'react';
import {analyzeGameBoardForEndConditions,
        isValidMoveOnBoard,
        shouldGameBeReset,
        endOfGameCheck} from './gameLogic/Logic';

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
            gameStatus: gameStatusValues.NEWGAME,
        };

        this.updateGameStatus = this.updateGameStatus.bind(this);
        this.updateToNextPlayerMakingMove = this.updateToNextPlayerMakingMove.bind(this);
        this.resetButtonHandleClick = this.resetButtonHandleClick.bind(this);
        this.endOfGameCheck = this.endOfGameCheck.bind(this);
    }

    updateGameStatus(newValue) {
        this.setState({
            gameStatus: newValue
        });
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
            isDisabledEndOfGameText: false,
            gameStatus: gameStatusValues.NEWGAME
        });
    }

    endOfGameCheck() {
        const {gameStatus} = this.state;

        // NEWGAME: "Starting a new Game",
        //     INVALIDMOVE: "A player has made an invalid move",
        //     VALIDMOVE: "A player has made a valid move",
        //     GAMEINPROGRESS: "Currently in progress",
        //     PLAYERONEWIN: "Player 1 (X) has won",
        //     PLAYERTWOWIN: "Player 2 (Y) has won",
        //     TIE: "Tie",
        //     ERROR: "Error"

        if (gameStatus === gameStatusValues.PLAYERONEWIN) {
            return <Message text={gameStatusValues.PLAYERTWOWIN}/>;

        } else if (gameStatus === gameStatusValues.PLAYERTWOWIN) {
            return <Message text={gameStatusValues.PLAYERTWOWIN}/>;

        } else {
            return <EndOfGameText gameStatus={gameStatus}/>;
        }
    }

    render() {
        const {gameStatus, player} = this.state;


        return (
            <div className="tic-tac-toe-container">
                <Title text="Tic Tac Toe Game"/>
                <ResetButton onClick={()=> this.resetButtonHandleClick()}/>
                <br/>
                <br/>
                <GameBoard
                    gameStatus={gameStatus}
                    playerMakingMove={player}
                    numTiles={NUM_TILES}
                    updateGameStatus={this.updateGameStatus}
                    updateToNextPlayerMakingMove={this.updateToNextPlayerMakingMove}
                    shouldGameBeReset={shouldGameBeReset}
                    isValidMoveOnBoard={isValidMoveOnBoard}
                    analyzeGameBoardForEndConditions={analyzeGameBoardForEndConditions}
                    endOfGameCheck={this.endOfGameCheck}
                />
                <br/>
                {this.endOfGameCheck()}
            </div>
        );
    }
}

export default TicTacToeGame;
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
        console.log("EoG");
    }

    gameMessage() {
        const {gameStatus} = this.state;
        const messageToDisplay = "Game Status: " + gameStatus;

        if ( (gameStatus === gameStatusValues.NEWGAME)
             || (gameStatus === gameStatusValues.PLAYERONEWIN)
             || (gameStatus === gameStatusValues.PLAYERTWOWIN)
             || (gameStatus === gameStatusValues.TIE)
             || (gameStatus === gameStatusValues.ERROR)
        ) {
            return <EndOfGameText gameStatus={messageToDisplay}/>;

        } else if ( (gameStatus === gameStatusValues.GAMEINPROGRESS)
                    || (gameStatus === gameStatusValues.VALIDMOVE)
                    || (gameStatus === gameStatusValues.INVALIDMOVE)
        ) {
            return <Message text={messageToDisplay}/>;
        } else {
            return <EndOfGameText gameStatus={"Game Status: " + gameStatusValues.ERROR}/>;
        }
    }

    render() {
        const {gameStatus, player} = this.state;
        console.log(gameStatus);

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
                    updateGameStatus={(newValue) => this.updateGameStatus(newValue)}
                    updateToNextPlayerMakingMove={() => this.updateToNextPlayerMakingMove()}
                    shouldGameBeReset={(gameStatus, updateGameStatus) => shouldGameBeReset(gameStatus, updateGameStatus)}
                    isValidMoveOnBoard={(playerMove, board, updateGameStatus) => isValidMoveOnBoard(playerMove, board, updateGameStatus)}
                    analyzeGameBoardForEndConditions={(board) => analyzeGameBoardForEndConditions(board)}
                    endOfGameCheck={() => this.endOfGameCheck()}
                />
                <br/>
                {this.gameMessage()}
            </div>
        );
    }
}

export default TicTacToeGame;
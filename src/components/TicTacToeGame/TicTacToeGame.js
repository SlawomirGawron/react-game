/* Tic Tac Toe Game
 * A simple Tic Tac Toe game made using React.
 * Author: Slawomir Gawron
 * Date: Created: May 29, 2019
 */

import React, { Component } from 'react';
import './TicTacToeGame.scss';
import {analyzeBoard, endOfGameCheck} from './gameLogic/logic';

class TicTacToeGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            player: "X",
            gameStatus: null,
            BoxGrid: null
        };

        this.BoxGridValue = this.BoxGridValue.bind(this);
    }

    componentDidMount() {
        this.setState({
            BoxGrid: this.BoxGridValue()
        });
    }

    /* BoxGridValue
     * Purpose: Used to create the Tic Tac Toe grid for the user interface.
     * Input: n/a
     * Return: An array of <div>
     * Result: n/a
     */
    BoxGridValue() {
        return (
            this.state.board.map((box, index) =>
                    <div
                        key={index}
                        className="tic-tac-toe-box"
                        onClick={() => this.handleClick(index)}
                    >
                        {box}
                    </div>
            )
        );
    }

    /* nextPlayer
     * Purpose: Chooses which player goes next.
     * Input: Where the player moved on the board.
     * Return: true if the player made a correct move, false otherwise.
     * Result: player state is changed.
     */
    nextPlayer(index) {
        if (this.state.board[index] === null) {
            if (this.state.player === "X") {
                this.setState({
                    player: "O"
                });
            } else {
                this.setState({
                    player: "X"
                });
            }
            return true;
        } else {
            return false;
        }
    }

    /* updateBoard
     * Purpose: To Update the board array and the U.I.
     * Input: Where the player moved on the board.
     * Return: n/a
     * Result: board, BoxGrid states are updated.
     */
    updateBoard(index) {
        let newBoard = this.state.board;

        newBoard[index] = this.state.player;

        this.setState({
            board: newBoard
        });

        this.setState({
            BoxGrid: this.BoxGridValue()
        });
    }

    /* gameLogicCheck
     * Purpose: To update the state gameStatus, which is used to determine if a game has ended.
     * Input: n/a
     * Return: n/a
     * Result: state gameStatus is updated.
     */
    gameLogicCheck() {
        this.setState({
            gameStatus: endOfGameCheck(analyzeBoard(this.state.board))
        });
    }

    /* displayMessage
     * Purpose: To display the result of a players turn.
     * Input: n/a
     * Return: HTML message.
     * Result: The game continues or ends.
     */
    displayMessage() {
        if (this.state.gameStatus !== null) {
            return <h2>{this.state.gameStatus}</h2>;
        } else {
            return this.turnMessage();
        }
    }

    /* turnMessage
     * Purpose:
     * Input: n/a
     * Return: HTML message
     * Result: n/a
     */
    turnMessage() {
        if (this.state.player === "X") {
            return <h2>Player one(X), choose a square</h2>;
        } else {
            return <h2>Player two(O), choose a square</h2>;
        }
    }

    /* handleClick
     * Purpose: Handles the result of a user clicking on a box on the Tic Tac Toe board.
     * Input: Where the player moved on the board.
     * Return: n/a
     * Result: Updates to various parts of the game.
     */
    handleClick(index) {
        if (this.nextPlayer(index)) {
            this.updateBoard(index);

            this.gameLogicCheck();
        }
    }

    render() {
        return (
            <div className="tic-tac-toe-container">
                <h1>Tic Tac Toe Game</h1>
                {this.displayMessage()}
                <div className="tic-tac-toe-board">
                    {this.state.BoxGrid}
                </div>
            </div>
        );
    }
}

export default TicTacToeGame;
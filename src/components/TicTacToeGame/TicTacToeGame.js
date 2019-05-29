import React, { Component } from 'react';
import './TicTacToeGame.scss';

class TicTacToeGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null)
        };
        this.Box = this.state.board.map((box, index) =>
            <div
                key={index}
                className="tic-tac-toe-box"
                onClick={() => this.handleClick(index)}
            >
                {box}
            </div>
        );
    }

    handleClick(index) {
        console.log(index);
    }

    render() {

        return (
            <div className="tic-tac-toe-container">
                <h1>Tic Tac Toe</h1>
                <div className="tic-tac-toe-board">
                    {this.Box}
                </div>
            </div>
        );
    }
}

export default TicTacToeGame;
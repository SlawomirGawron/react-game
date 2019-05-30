import React, { Component } from 'react';
import './TicTacToeGame.scss';

class TicTacToeGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            player: "X"
        };

        // Array of divs made from board state.
        this.BoxGrid = this.setBoxGrid();
    }

    setBoxGrid() {
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

    handleClick(index) {
        let newBoard = this.state.board;
        newBoard[index] = this.state.player;

        if (this.state.player === "X") {
            this.setState({
                player: "O"
            });
        } else {
            this.setState({
                player: "X"
            });
        }


        this.setState({
            board: newBoard
        });

        this.BoxGrid = this.setBoxGrid();
    }

    turnMessage() {
        if (this.state.player === "X") {
            return <h2>Player one(X), choose a square</h2>;
        } else {
            return <h2>Player two(O), choose a square</h2>;
        }
    }

    render() {
        return (
            <div className="tic-tac-toe-container">
                <h1>Tic Tac Toe Game</h1>
                {this.turnMessage()}
                <div className="tic-tac-toe-board">
                    {this.BoxGrid}
                </div>
            </div>
        );
    }
}

export default TicTacToeGame;
import React from 'react';
/* analyzeThreeBoxes
 * Purpose: To compare if 3 boxes withing board are the same value.
 * Input: Array of indices, the Tic Tac Toe board.
 * Return: The contents of 3 boxes with same value.
 */
function analyzeThreeBoxes(indexArray, board) {
    if ((board[indexArray[0]] === board[indexArray[1]])
        && (board[indexArray[1]] === board[indexArray[2]])
    ) {
        return board[indexArray[0]];
    } else {
        return null;
    }
}

/* analyzeBoard
 * Purpose: To determine if a game of Tic Tac Toe has been completed.
 * Input: Board is an array that contains "X", "O", or null
 * Return: "X" if player one has won the game,
 *         "O" if player two has won the game,
 *         null otherwise.
 * Note: There are essentially 4 cases:
 *         - 1) rows
 *         - 2) columns
 *         - 3) diagonal 1
 *         - 4) diagonal 2
 */
export function analyzeBoard(board) {
    let result = null;
    let cases = {
        rows: [[0,1,2], [3,4,5], [6,7,8]],
        cols: [[0,3,6], [1,4,7], [2,5,8]],
        diags: [[0,4,8], [2,4,6]]
    };

    for (let c in cases) {
        for (let i = 0; i < cases[c].length; i++) {
            result = analyzeThreeBoxes(cases[c][i], board);

            if (result !== null) {
                return result;
            }
        }
    }

    return result;
}

/* endOfGameCheck
 * Purpose: Return a message based on the result of analyzeBoard.
 * Input: A string "X", "O", or null
 * Return: HTML or null
 */
export function endOfGameCheck(playerMoveResult) {
    if (playerMoveResult === "X") {
        return <h2>PLAYER ONE(X) HAS WON!</h2>;
    } else if (playerMoveResult === "O") {
        return <h2>PLAYER TWO(O) HAS WON!</h2>;
    } else {
        return null;
    }
}
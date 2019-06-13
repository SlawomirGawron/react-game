import {players, gameStatusValues} from 'src/common/utilities/ENUMS.js';

function analyzeThreeTiles(indexOnBoard, board) {
    if ( (board[indexOnBoard[0]] === board[indexOnBoard[1]])
         && (board[indexOnBoard[1]] === board[indexOnBoard[2]])
         && (board[indexOnBoard[0]] !== null)
    ) {
        if (board[indexOnBoard[0]] === players.ONE) {
            return gameStatusValues.PLAYERONEWIN;
        } else if (board[indexOnBoard[0]] === players.TWO) {
            return gameStatusValues.PLAYERTWOWIN;
        } else {
            return gameStatusValues.ERROR;
        }
    } else {
        return gameStatusValues.GAMEINPROGRESS;
    }
}

function checkForTie(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            return gameStatusValues.GAMEINPROGRESS;
        }
    }
    return gameStatusValues.TIE;
}

export function analyzeGameBoardForEndConditions(board) {
    let result = gameStatusValues.ERROR;
    let cases = {
        rows: [[0,1,2], [3,4,5], [6,7,8]],
        cols: [[0,3,6], [1,4,7], [2,5,8]],
        diags: [[0,4,8], [2,4,6]]
    };

    for (let c in cases) {
        for (let i = 0; i < cases[c].length; i++) {
            result = analyzeThreeTiles(cases[c][i], board);

            if (result !== gameStatusValues.GAMEINPROGRESS) {
                return result;
            }
        }
    }

    return checkForTie(board);
}

export function isValidMoveOnBoard(playerMove, board) {
    return (board[playerMove] === null);
}

export function shouldGameBeReset(gameStatus) {
    return (gameStatus === gameStatusValues.NEWGAME);
}

export function notEndOfGameCheck(gameStatus) {
    return ( (gameStatus === gameStatusValues.GAMEINPROGRESS)
        || (gameStatus === gameStatusValues.VALIDMOVE)
        || (gameStatus === gameStatusValues.INVALIDMOVE)
    )
}

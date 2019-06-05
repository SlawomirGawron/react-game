/* Tic Tac Toe Game
 * A simple Tic Tac Toe game made using React.
 * Author: Slawomir Gawron
 * Date: Created: May 29, 2019
 */

import React, { Component } from 'react';
import './TicTacToeGame.scss';
import {analyzeBoard, endOfGameCheck} from './gameLogic/Logic';
import {createArrayWithInitialValue} from '../../utilities/utilities';
import ResetButton from '../../buttons/resetButton/ResetButton';
import Title from '../../text/title/Title';
import EndOfGameText from '../../text/endOfGameText/EndOfGameText';
import {player, gameStatus} from '../../utilities/ENUMS';
import Message from "../../text/message/Message";
import GameBoard from "./gameBoard/GameBoard";
import PropTypes from "prop-types";

class TicTacToeGameTemp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabledEndOfGameText: true,
            numTiles: 9,
            player: player.ONE,
            arrayOfTileValues: []
        };

        this.onClickTile = this.onClickTile.bind(this);
        this.resetButtonHandleClick = this.resetButtonHandleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            arrayOfTileValues: createArrayWithInitialValue(this.state.numTiles, null)
        });
    }

    resetButtonHandleClick() {
        this.setState({
            isDisabledEndOfGameText: false
        });
    }

    onClickTile(tileIndex) {
        let updatedArrayOfTileValues = this.state.arrayOfTileValues;
        updatedArrayOfTileValues[tileIndex] = this.state.player;

        this.setState({
            arrayOfTileValues: updatedArrayOfTileValues
        });
    }

    render() {
        return (
            <div className="tic-tac-toe-container">
                <Title text="Tic Tac Toe Game"/>
                <Message text="Player one(X), choose a square"/>
                <ResetButton onClick={()=> this.resetButtonHandleClick()}/>
                <br/>
                <br/>
                <GameBoard
                    arrayOfTileValues={this.state.arrayOfTileValues}
                    numTiles={this.state.numTiles}
                    onClickTile={this.onClickTile}
                />
                <br/>
                {!this.state.isDisabledEndOfGameText && <EndOfGameText gameStatus={gameStatus.GAMEINPROGRESS}/>}
            </div>
        );
    }
}

export default TicTacToeGameTemp;
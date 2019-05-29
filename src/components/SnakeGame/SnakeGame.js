import React, { Component } from 'react';
import Snake from './Snake/Snake';

class SnakeGame extends Component {
    render() {
        return (
            <div>
                <h1>Snake Game</h1>
                <Snake></Snake>
            </div>
        );
    }
}

export default SnakeGame;
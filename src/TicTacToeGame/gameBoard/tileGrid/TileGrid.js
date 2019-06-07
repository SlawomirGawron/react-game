import React from 'react';

import './TileGrid.scss';

function TileGrid({ children }) {
    return (
        <div className="tic-tac-toe-grid">
            {children}
        </div>
    );
}

export default TileGrid;
import React from 'react';

const Card = props => {

    return (
        <div className={`card rank-${props.rank} ${props.suit}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.icon}</span>
        </div>
    );
};


export default Card;
import React from "react";

const PlayerCard = (props) => {
    return (
        <div>
            <p>{`Player name: ${props.name}`}</p>
            <p>{`Country: ${props.country}`}</p>
            <p>{`# of Searches: ${props.searches}`}</p>
        </div>
    )
}

export default PlayerCard;
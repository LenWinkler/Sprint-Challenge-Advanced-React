import React from "react";
import styled from "styled-components";



const PlayerCard = (props) => {
    return (
        <div className="card-div">
            <p>{`Player name: ${props.name}`}</p>
            <p>{`Country: ${props.country}`}</p>
            <p>{`# of Searches: ${props.searches}`}</p>
        </div>
    )
}

export default PlayerCard;
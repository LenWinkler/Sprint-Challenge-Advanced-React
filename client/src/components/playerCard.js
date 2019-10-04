import React from "react";
import styled from "styled-components";



const PlayerCard = (props) => {
    console.log(props)
    return (
        <div className="card-div">
            <p>{`Player name: ${props.player.name}`}</p>
            <p>{`Country: ${props.player.country}`}</p>
            <p>{`# of Searches: ${props.player.searches}`}</p>
        </div>
    )
}

export default PlayerCard;
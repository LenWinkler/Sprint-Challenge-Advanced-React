import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 30%;
    border: 1px solid black;
`

const PlayerCard = (props) => {
    console.log(props)
    return (
        <CardDiv>
            <p>{`Player name: ${props.player.name}`}</p>
            <p>{`Country: ${props.player.country}`}</p>
            <p>{`# of Searches: ${props.player.searches}`}</p>
        </CardDiv>
    )
}

export default PlayerCard;
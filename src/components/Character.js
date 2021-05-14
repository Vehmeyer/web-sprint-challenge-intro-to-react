import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    border: 5px solid darkgrey;
    border-radius: 3px;
    margin: 2% 5.5%;
    background-color:rgba(0, 0, 0, 0.25);
    min-height: 10vh;
    color: lightgrey;

    &:hover {
        background-color:rgba(0, 0, 0, 0.5);
        color: white;
        border: 5px solid black;
        font-size: 1.2rem;
        transition: all 0.4s ease-in-out;
    }
    transition: all 0.4s ease-in-out;
`

const Character = props => {
    const { character } = props;
    console.log(character)
    return (
        <StyledCharacter>
            <h3>{character.name}</h3>
                <p>Height: {character.height} - Weight: {character.mass} kg</p>
                <p></p>
                <p></p>
        </StyledCharacter>
    )
}

export default Character;
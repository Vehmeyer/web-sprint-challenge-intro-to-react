import React from 'react';
// import styled from 'styled-components';

const Character = props => {
    const { character } = props;
    console.log(character)
    return (
        <div>
            <p>{character}</p>
        </div>
    )
}

export default Character;
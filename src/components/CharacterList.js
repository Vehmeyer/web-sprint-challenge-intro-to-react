import React from 'react';
// import styled from 'styled-components'
import Character from './Character';

const CharacterList = (props) => {

    const { characters } = props;

    return (
        <div>
            {characters.map((item) => {
            return <Character key={item.id} character={item} />
            })}   
        </div>

    )
    
    
    
    // return (
    //     <div>
    //        {characters.map((item) => (
    //        <h1>{item.name}</h1>
    //        ))}
    //     </div>
    // )
}

export default CharacterList;




import React from 'react';

const CharacterList = (props) => {

    const { characters } = props;

    return (
        <div>
           {characters.map((item) => (
           <h1>{item.name}</h1>
           ))}
        </div>
    )
}

export default CharacterList;
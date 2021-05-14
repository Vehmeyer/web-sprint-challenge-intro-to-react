import React from 'react';
import styled from 'styled-components';

// 1. create StyledHeader
const StyledHeader = styled.div`
 width: 100%
 padding: 1.5% 5%;
 margin: 0 auto;
 color: #443e3e;
 text-shadow: 1px 1px 5px #fff;
 border-bottom: 5px solid black;
 font-size: 2rem;

 &:hover {
    /* background-color:rgba(0, 0, 0, 0.5); */
    color: grey;
    font-size: 2.15rem;
    transition: all 0.4s ease-in-out;
 }
 transition: all 0.4s ease-in-out;

 `

const Header = (props) => {
    return (
        <StyledHeader>
            <div>
                <h1>Star Wars Characters</h1>
            </div>
        </StyledHeader>
    )
}

export default Header;
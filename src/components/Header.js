import React from 'react';
import styled from 'styled-components';

// 1. create StyledHeader
const StyledHeader = styled.div`
 padding: 2% 10%;
 color: #443e3e;
 text-shadow: 1px 1px 5px #fff;
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
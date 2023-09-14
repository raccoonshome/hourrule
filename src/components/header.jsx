import React from   'react';
import styled from 'styled-components';

const Header = () =>{
    return <StyledHeader>
            <img src='main.png'/>
        </StyledHeader>
    
}

export default Header;

const StyledHeader = styled.header`
    max-width: 1200px;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 70%;
        object-fit: contain;
        aspect-ratio: 1/1;
        object-position: 50% 55%;
    }
`;
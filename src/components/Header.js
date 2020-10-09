import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
    text-align: center;

    h1 {
        font-family: sans-serif;
        color: #443e3e;
        text-shadow: 1px 1px 5px #fff;
    }
`;


export default function Header() {
    return(
        <>
            <StyledHeader>
                <h1>Major Star Wars Characters</h1>
            </StyledHeader>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const StyledCharacters = styled.div`
    margin: 0 10%;
    display:flex;
    flex-direction: column;
    font-family:sans-serif;
`;

const StyledCharacter = styled.div`
    margin: 1.5% 0;
    background-image: url('https://monodomo.com/free-wallpapers/star-wars-background-For-Free-Wallpaper.jpg');
    display: flex;
    justify-content: space-between;
    border: 5px inset #A43D3D;
    border-radius: 0px 30px 0px 30px;

    h2 {
        color: #3838F1;
    }

    p {
        color: white;
        align-self: flex-end;
    }

    &:hover {
        transform: scale(1.2)
    }
    transition: all 0.3s ease-in-out;
`;


export default function Character(props) {

    let { characters } = props

    return(
        <StyledCharacters>
            {characters.map((character) => {
                return <StyledCharacter>
                        <h2>{character.name}</h2>
                        <p>Born in the year {character.birth_year}</p>
                       </StyledCharacter>
            })}
        </StyledCharacters>
    )
}
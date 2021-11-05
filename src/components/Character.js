// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledCharacter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 2% 25%;
    border: 1px solid green;

    h2{
        padding: 0 2%;
        
    }
    div{
        padding: 2% 3%;
        margin-right: 2%;
        background-color:grey;
        border-radius: 10% 43%;
    }

`;

function Character({ character }){
    return (
        <StyledCharacter>
        <h2>{character.name}</h2>
        <div>{character.birth_year}</div>

        </StyledCharacter>
    )
}
export default Character;
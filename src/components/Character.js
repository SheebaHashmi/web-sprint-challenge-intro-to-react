// Write your Character component here
import React from "react";
import styled from 'styled-components';

const Accordian = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid green;
    width: 50%;
    margin: 0 25%;
    
    h2{
        padding: 0 2%;
    }
    div{
        padding-right: 2%;
    }

`;

function Character({ character }){
    return (
        <Accordian>
        <h2>{character.name}</h2>
        <div>{character.birth_year}</div>

        </Accordian>
    )
}
export default Character;
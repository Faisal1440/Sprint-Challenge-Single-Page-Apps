import React from "react";
import Styled from 'styled-components';

const Designs = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center: 
align-items: center;
margin: 52px;
border: 2px blue solid;
width: 35%;
`

export default function CharacterCard(props) {
  return (
    <Designs>
      <h2>Name: {props.Name.name}</h2>
      <img src={`${props.Name.image}`}/>
    </Designs>
  )
  
}

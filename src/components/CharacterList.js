import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";
import {Link} from "react-router-dom";
import Styled from "styled-components";

export default function CharacterList() {

  const Designer = Styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 2px blue dotted;
  max-width:1024px;
  `
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters ]= useState([]);
  const [find, setFind] = useState ("");// 2 usestate for searchfrom goes here ?
  const onFinder = Look => {
    console.log(Look)
    setFind (Look);
  }
  const [searchcharacter, setSearchCharacter] = useState(characters);

  useEffect(() => {
    
  axios // TODO: Add API Request here - must run in `useEffect`
    .get ("https://rickandmortyapi.com/api/character/")

    .then(res => {
      setCharacters (res.data.results)
      setSearchCharacter(res.data.results)
    })

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  //CHECH CHECK CHECK CHECK CHECK 
  console.log (characters)
  //CHECH CHECK CHECK CHECK CHECK 

  function findMatch(word){

    if (word.name.toLowerCase().includes(find.toLowerCase()))
    return (word)
  }

  useEffect (() => {
    const result= 
    // setSearchCharacter (
      characters.filter(findMatch)
      console.log(characters.filter(findMatch))
      setSearchCharacter(result)
    
  },[find])

  //CHECH CHECK CHECK CHECK CHECK 
  console.log (searchcharacter);
  //CHECH CHECK CHECK CHECK CHECK 


  return (
    <section className="character-list">
      <SearchForm space = { onFinder}/>
      <Link to= "/">Home</Link> 
      <Designer>
        {searchcharacter.map(character =>
        
          <CharacterCard 
          key={character.id}
          Name={character}
          />

          )}
      </Designer>
    </section>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const Design = styled.button`
background: green;
border-radius: 2px;
margin: 0 1em;
padding: 0.25em 1em;
`


export default function SearchForm(props) {
  
  const [test, setTest] = useState ("");

  const handleChanges = e => {
    props.space(e.target.value);
    setTest(e.target.value);
  }

  const submission = e => {
    e.preventDefault();
    props.space(test);
  }


  return (
    <section className="search-form">
      <form onSubmit={submission}>
        <label htmlFor="name">Name</label>
        <input 
          id="name"
          type="text"
          placeholder={handleChanges}
          name="find"
          />
        <Design type="submit">Search Here</Design>
      </form>
    </section>
  );
}

import React from "react";
import Header from "./components/Header.js";
import Characterlist from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <main>
      
      <Header />
      <Route exact path= "/" component={WelcomePage}/>
      <Route path= "/names" component = {Characterlist}/>

    </main>
  );
}

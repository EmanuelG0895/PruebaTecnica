import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CharacterInfo from "./components/CharacterInfo.tsx";

const character = {
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: { name: "Earth (C-137)" },
  location: { name: "Earth (C-137)" },
  type: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [],
  created: "2017-11-04T18:48:46.250Z",
};

const App = () => <CharacterInfo character={character} />;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

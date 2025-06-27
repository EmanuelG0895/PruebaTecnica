import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";
const CharacterInfo = React.lazy(
  () => import("MF_CharacterDetail/CharacterInfo")
);
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
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">

    <Suspense fallback={<div>Cargando...</div>}>
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
      <CharacterInfo character={character} />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

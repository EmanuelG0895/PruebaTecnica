import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";
const CharacterInfo = React.lazy(
  () => import("MF_CharacterDetail/CharacterInfo")
);

const App = () => (
  <div className="grid ">
    <Suspense fallback={<div>Cargando...</div>}>
      <CharacterInfo />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

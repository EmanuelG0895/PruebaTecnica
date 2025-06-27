import ReactDOM from "react-dom/client";

import "./index.css";
import CharacterInfo from "MF_CharacterDetail/CharacterInfo";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: MF-Shell</div>
    <div>Framework: react-18</div>
    <CharacterInfo />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

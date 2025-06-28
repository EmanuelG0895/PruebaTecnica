import CharacterInfo from "./CharacterInfo";
import { useCharacters, useSearch } from "../hooks";

export default function View() {
  const { characters, loading, error } = useCharacters();
  const { searchTerm, filteredCharacters, handleSearchChange } =
    useSearch(characters);

  if (loading) {
    return <div className="loading">Loading characters...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="characters-grid-container">
      <div className="search-container" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>
      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <CharacterInfo key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}


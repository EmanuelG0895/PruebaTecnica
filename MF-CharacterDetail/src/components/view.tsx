import React, { useEffect } from "react";
import CharacterInfo from "./CharacterInfo";
import { useCharacterDetail } from "../hooks/useCharacterDetail"; // importa tu hook modificado
import { useSearch } from "../hooks";
import "./CharacterInfo.css";

export default function View() {
  const { characters, loading, error, loadCharacters, loadMore, hasMore } =
    useCharacterDetail();

  const { searchTerm, filteredCharacters, handleSearchChange } =
    useSearch(characters);

  // Cargar personajes al montar el componente
  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  if (loading && characters.length === 0) {
    // Si está cargando y no hay personajes aún
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

      {hasMore && !loading && (
        <button className="btn-verMas" onClick={loadMore}>
          Ver más
        </button>
      )}

      {loading && characters.length > 0 && (
        <div className="loading" style={{ marginTop: "10px" }}>
          Cargando más personajes...
        </div>
      )}
    </div>
  );
}

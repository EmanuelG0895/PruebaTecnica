import React from "react";
import "./CharacterInfo.css";

interface CharacterInfoProps {
  character: {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    type?: string;
    image?: string;
    episode: any[];
    created: string;
  };
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  const getStatusClass = (status: string) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "status-badge status-alive";
      case "dead":
        return "status-badge status-dead";
      default:
        return "status-badge status-unknown";
    }
  };

  if (!character) {
    return (
      <div className="character-card">
        <div className="character-content">
          <span className="created-date">No character data available.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="character-card">
      <img
        src={character.image || "/placeholder.svg"}
        alt={character.name}
        className="character-image"
        loading="lazy"
      />

      <div className="character-content">
        <div className="character-header">
          <h1 className="character-name">{character.name}</h1>
          <span className={getStatusClass(character.status)}>
            {character.status}
          </span>
        </div>

        <div className="character-details">
          <div className="detail-group">
            <div className="detail-item">
              <span className="detail-label">Species</span>
              <span className="detail-value">{character.species}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Gender</span>
              <span className="detail-value">{character.gender}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Origin</span>
              <span className="detail-value">{character.origin?.name}</span>
            </div>
          </div>

          <div className="detail-group">
            <div className="detail-item">
              <span className="detail-label">Type</span>
              <span className="detail-value">
                {character.type || "Unknown"}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">{character.location?.name}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Episodes</span>
              <span className="detail-value">
                {character.episode?.length ?? 0}
              </span>
            </div>
          </div>
        </div>

        <div className="character-footer">
          <span className="created-date">
            Created:{" "}
            {character.created
              ? new Date(character.created).toLocaleDateString()
              : "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;

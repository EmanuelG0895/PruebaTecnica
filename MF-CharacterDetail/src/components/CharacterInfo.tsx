import React from "react";

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
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "text-green-600 bg-green-100";
      case "dead":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (!character) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center">
        <span className="text-gray-500">No character data available.</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={character.image || "/placeholder.svg"}
            alt={character.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(character.status)}`}>
              {character.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Species:</span>
                <span className="ml-2 text-gray-600">{character.species}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Gender:</span>
                <span className="ml-2 text-gray-600">{character.gender}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Origin:</span>
                <span className="ml-2 text-gray-600">{character.origin?.name}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Type:</span>
                <span className="ml-2 text-gray-600">{character.type || "Unknown"}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Location:</span>
                <span className="ml-2 text-gray-600">{character.location?.name}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Episodes:</span>
                <span className="ml-2 text-gray-600">{character.episode?.length ?? 0}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <span className="text-xs text-gray-500">
              Created: {character.created ? new Date(character.created).toLocaleDateString() : "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;

import { useState, useEffect, useCallback } from "react";
import { fetchCharacter, fetchEpisodes } from "../services/api";

interface Character {
  id: number;
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
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface UseCharacterDetailReturn {
  character: Character | null;
  episodes: Episode[];
  loading: boolean;
  error: string | null;
  loadCharacter: (id: number) => Promise<void>;
  clearCharacter: () => void;
}

export const useCharacterDetail = (): UseCharacterDetailReturn => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCharacter = useCallback(async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch character details
      const characterData = await fetchCharacter(id);
      setCharacter(characterData);
      
      // Fetch episodes if character has episodes
      if (characterData.episode && characterData.episode.length > 0) {
        const episodeIds = characterData.episode.map((ep: string) => {
          const match = ep.match(/\/(\d+)$/);
          return match ? match[1] : null;
        }).filter(Boolean);
        
        if (episodeIds.length > 0) {
          const episodesData = await fetchEpisodes(episodeIds);
          setEpisodes(Array.isArray(episodesData) ? episodesData : [episodesData]);
        }
      }
    } catch (err) {
      setError("Error loading character details");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearCharacter = useCallback(() => {
    setCharacter(null);
    setEpisodes([]);
    setError(null);
  }, []);

  return {
    character,
    episodes,
    loading,
    error,
    loadCharacter,
    clearCharacter
  };
}; 
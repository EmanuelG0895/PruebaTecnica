import { logger } from "../utils/logger";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const fetchAllCharactersPaginated = async () => {
  try {
    let allCharacters: any[] = [];
    let nextUrl: string | null = `${API_BASE_URL}/character`;
    let page = 1;

    while (nextUrl) {
      logger.info("Fetching characters page", { page, url: nextUrl });

      const response = await fetch(nextUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      logger.info("Page fetched", {
        count: data.results?.length || 0,
        currentPage: page,
      });

      allCharacters = allCharacters.concat(data.results);
      nextUrl = data.info?.next;
      page++;
    }

    logger.info("All characters fetched", { total: allCharacters.length });

    return { results: allCharacters };
  } catch (error) {
    logger.error("Error fetching all characters paginated", error as any);
    throw error;
  }
};

export const fetchCharacter = async (id: any) => {
  try {
    const url = `${API_BASE_URL}/character/${id}`;

    logger.info("Fetching character from API", { id, url });

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    logger.info("Character fetched successfully", {
      id: data.id,
      name: data.name,
    });

    return data;
  } catch (error) {
    logger.error("Error fetching character", error as any);
    throw error;
  }
};

export const fetchAllCharacters = async () => {
  try {
    let allCharacters: any[] = [];
    let nextUrl: string | null = `${API_BASE_URL}/character`;
    let page = 1;

    while (nextUrl) {
      logger.info("Fetching characters page", { page, url: nextUrl });

      const response = await fetch(nextUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      allCharacters = allCharacters.concat(data.results);
      nextUrl = data.info?.next;
      page++;
    }

    logger.info("All characters fetched", { total: allCharacters.length });

    return { results: allCharacters };
  } catch (error) {
    logger.error("Error fetching all characters", error as any);
    throw error;
  }
};

export const fetchEpisodes = async (episodeIds: any) => {
  try {
    const ids = Array.isArray(episodeIds) ? episodeIds.join(",") : episodeIds;
    const url = `${API_BASE_URL}/episode/${ids}`;

    logger.info("Fetching episodes from API", { episodeIds, url });

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    logger.info("Episodes fetched successfully", {
      count: Array.isArray(data) ? data.length : 1,
    });

    return data;
  } catch (error) {
    logger.error("Error fetching episodes", error as any);
    throw error;
  }
};

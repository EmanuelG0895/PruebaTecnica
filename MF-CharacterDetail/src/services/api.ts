import { logger } from "../utils/logger"

const API_BASE_URL = "https://rickandmortyapi.com/api"

export const fetchCharacter = async (id: any) => {
  try {
    const url = `${API_BASE_URL}/character/${id}`

    logger.info("Fetching character from API", { id, url })

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    logger.info("Character fetched successfully", { id: data.id, name: data.name })

    return data
  } catch (error) {
    logger.error("Error fetching character", error as any)
    throw error
  }
}

export const fetchAllCharacters = async (page: number = 1) => {
  try {
    const url = `${API_BASE_URL}/character?page=${page}`

    logger.info("Fetching all characters from API", { page, url })

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    logger.info("Characters fetched successfully", {
      count: data.results?.length || 0,
      totalPages: data.info?.pages || 0,
      currentPage: page
    })

    return data
  } catch (error) {
    logger.error("Error fetching all characters", error as any)
    throw error
  }
}

export const fetchEpisodes = async (episodeIds: any) => {
  try {
    const ids = Array.isArray(episodeIds) ? episodeIds.join(",") : episodeIds
    const url = `${API_BASE_URL}/episode/${ids}`

    logger.info("Fetching episodes from API", { episodeIds, url })

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    logger.info("Episodes fetched successfully", {
      count: Array.isArray(data) ? data.length : 1,
    })

    return data
  } catch (error) {
    logger.error("Error fetching episodes", error as any)
    throw error
  }
}

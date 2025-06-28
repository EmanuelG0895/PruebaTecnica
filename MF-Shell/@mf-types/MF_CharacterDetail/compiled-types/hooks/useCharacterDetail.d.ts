interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
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
export declare const useCharacterDetail: () => UseCharacterDetailReturn;
export {};

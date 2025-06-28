declare module "MF_CharacterDetail/CharacterInfo";
declare module "MF_CharacterDetail/useCharacters" {
  export function useCharacters(): {
    characters: any[];
    loading: boolean;
    error: string | null;
    loadCharacters: (page: number) => Promise<void>;
    refetch: () => Promise<void>;
  };
}
declare module "MF_CharacterDetail/useSearch";
declare module "MF_CharacterDetail/useCharacterDetail";

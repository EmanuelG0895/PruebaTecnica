
    export type RemoteKeys = 'MF_CharacterDetail/CharacterInfo' | 'MF_CharacterDetail/View';
    type PackageType<T> = T extends 'MF_CharacterDetail/View' ? typeof import('MF_CharacterDetail/View') :T extends 'MF_CharacterDetail/CharacterInfo' ? typeof import('MF_CharacterDetail/CharacterInfo') :any;
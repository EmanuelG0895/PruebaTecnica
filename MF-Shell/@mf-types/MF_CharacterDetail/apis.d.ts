
    export type RemoteKeys = 'MF_CharacterDetail/CharacterInfo';
    type PackageType<T> = T extends 'MF_CharacterDetail/CharacterInfo' ? typeof import('MF_CharacterDetail/CharacterInfo') :any;
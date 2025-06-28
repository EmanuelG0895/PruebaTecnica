
    export type RemoteKeys = 'MF_Characters/Vista';
    type PackageType<T> = T extends 'MF_Characters/Vista' ? typeof import('MF_Characters/Vista') :any;
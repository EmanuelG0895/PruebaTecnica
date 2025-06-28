export const mfConfig = {
  name: "MF_Shell",
  remotes: {
    MF_CharacterDetail:
      "MF_CharacterDetail@http://localhost:3003/remoteEntry.js",    
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "shared-hooks": { singleton: true, requiredVersion: "*" },
  },
};

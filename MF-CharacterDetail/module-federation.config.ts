export const mfConfig = {
  name: "MF_CharacterDetail",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./CharacterInfo": "./src/components/CharacterInfo.tsx"
  },
  shared: ["react", "react-dom"],
};

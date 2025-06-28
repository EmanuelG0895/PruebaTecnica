export const mfConfig = {
  name: "MF_Characters",
  filename: "remoteEntry.js",
  exposes: {
    "./Vista": "./src/components/Vista",
  },
  shared: ["react", "react-dom"],
};

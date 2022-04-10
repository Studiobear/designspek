module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: ["@vanilla-extract/babel-plugin", "svelte-inline-compile"],
};

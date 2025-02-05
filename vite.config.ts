import legacy from "@vitejs/plugin-legacy";

export default {
  base: "/clock/",
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
};

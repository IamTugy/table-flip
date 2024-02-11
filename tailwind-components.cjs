import plugin from "tailwindcss/plugin";


export default plugin(function ({ matchUtilities, theme, addComponents }) {
  addComponents({
    ".flex-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".transform-style-3d": {
      transformStyle: "preserve-3d",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

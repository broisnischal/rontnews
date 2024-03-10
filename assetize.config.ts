import { defineAssetizeConfig } from "assetize";

export default defineAssetizeConfig({
  lineLength: 80,
  codebase: "remix",
  assets: {
    path: "./public",
    integrations: {
      images: {
        path: "./images",
      },
      icons: {
        path: "./icons",
      },
      fonts: {
        path: "./fonts",
      },
    },
  },
  case: "pascal",
  className: "MyAssets",
  output: "./app",
  outputFile: "assetize.gen.ts",
});

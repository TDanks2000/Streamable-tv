import "dotenv/config";

export default {
  expo: {
    extra: {
      // Add your extra configs here
      tmdb_api_key: process.env.tmdb_api_key,
    },
    name: "Streamable-tv",
    slug: "Streamable-tv",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#0f0f0f",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#0f0f0f",
      },
      package: "com.tdanks2000.Streamabletv",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};

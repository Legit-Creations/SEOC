import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,

    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",

    background_color: "#ffffff",
    theme_color: "#ffffff",

    lang: "en",
    dir: "ltr",

    icons: [
      {
        src: siteConfig.icons.icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: siteConfig.icons.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
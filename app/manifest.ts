import type { MetadataRoute } from "next";
import { brand } from "@/config/brand.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.brandName,
    short_name: brand.brandName,
    description: brand.brandTagline,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8FA",
    theme_color: "#0B1E3C",
    icons: [
      { src: "/images/logo-icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

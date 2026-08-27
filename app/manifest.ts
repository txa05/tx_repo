import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tx | Portfólio",
    short_name: "Tx",
    description:
      "Portfólio de Tx, desenvolvedor em formação com foco em sistemas, backend e desenvolvimento web.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon", sizes: "any", type: "image/png" }],
  };
}

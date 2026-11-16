export const SITE_URL = "https://quickplayer.website";
export const SITE_NAME = "Quick Player";
export const SITE_TAGLINE = "O Reprodutor de IPTV Mais Rápido e Estável em 4K e Full HD";
export const SITE_DESCRIPTION = "Quick Player: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://quickplayer.website/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}

import { API_URL } from "./fetchRequest";

/**
 * Rewrites an absolute API image URL to a same-origin proxy path so that
 * client-side consumers (e.g. fslightbox-react's XHR) are not blocked by CORS.
 * The /img-proxy/* rewrite in next.config.mjs forwards to api.arzuyurci.com.
 */
export const proxyImage = (url) => {
  if (typeof url !== "string" || !API_URL) return url;
  if (url.startsWith(API_URL)) {
    return `/img-proxy${url.slice(API_URL.length)}`;
  }
  return url;
};

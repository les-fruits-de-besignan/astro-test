// Cloudinary applies transformations from a path segment inserted right after
// /upload/ — the originals are never touched. `f_auto` negotiates WebP or AVIF
// from the browser's Accept header, `q_auto` picks the quality, and `c_fill`
// crops server-side to the box the CSS actually displays, so we stop shipping
// pixels the browser only throws away.
//
// Crop ratios below mirror the CSS: keep them in step if those heights change.

/** 380×200 card slot in Products.css, at 2× for retina. */
export const PRODUCT_CARD = 'f_auto,q_auto,c_fill,w_760,h_400';

/** Full-width 1200×220 banner in SeasonOffer.css. */
export const SEASON_BANNER = 'f_auto,q_auto,c_fill,w_1600,h_294';

/** Social preview. Fixed jpg: some scrapers still refuse WebP. */
export const OG_IMAGE = 'f_jpg,q_auto,c_fill,w_1200,h_630';

export function cloudinary(url: string, transform: string): string {
  return url.replace('/image/upload/', `/image/upload/${transform}/`);
}

const library = [7545279,5124877,9301293];
export function journalThumbnail(asset: unknown): string { const key=typeof asset === "string" ? asset : ""; let h=0; for(const c of key) h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;return "/design-photography/"+library[h%library.length]+".webp"; }

export const ptypes = new Set([
    "num", "long"
]);
export const dtypes = new Set([
    "array", "object", "string"
]);
export const ftypes = new Set([
    "class", "fn", "map", "set"
]);
export const reserved = new Set([
    "const", "static", "return", ...ptypes, ...dtypes, ...ftypes
]);

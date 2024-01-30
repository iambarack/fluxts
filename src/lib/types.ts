export const ptypes = new Set<string>([
    "num", "long"
]);

export const dtypes = new Set<string>([
    "array", "object", "string"
]);
export const ftypes = new Set<string>([
    "class", "fn", "map", "set"
]);
export const reserved = new Set<string>([
    "const", "static", "return", ...ptypes, ...dtypes, ...ftypes
]);
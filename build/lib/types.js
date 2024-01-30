"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserved = exports.ftypes = exports.dtypes = exports.ptypes = void 0;
exports.ptypes = new Set([
    "num", "long"
]);
exports.dtypes = new Set([
    "array", "object", "string"
]);
exports.ftypes = new Set([
    "class", "fn", "map", "set"
]);
exports.reserved = new Set([
    "const", "static", "return", ...exports.ptypes, ...exports.dtypes, ...exports.ftypes
]);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findToken = exports.cw = exports.token_t = void 0;
const types_js_1 = require("./types.js");
exports.token_t = new Map([
    ["T_RSV", {
            keys: types_js_1.reserved,
        }],
    ["T_PTY", {
            keys: new Set([...types_js_1.ptypes])
        }],
    ["T_DTY", {
            keys: new Set([...types_js_1.dtypes])
        }],
    ["T_FTY", {
            keys: new Set([...types_js_1.ftypes])
        }]
]);
function cw(n) {
    console.log(n);
}
exports.cw = cw;
function findToken(keyword) {
    let c_token = null;
    exports.token_t.forEach((e, _) => e.keys.has(keyword) ? c_token = _ : 0);
    return c_token;
}
exports.findToken = findToken;

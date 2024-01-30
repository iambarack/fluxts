import { ptypes, dtypes, ftypes, reserved } from "./types.js";
export const token_t = new Map([
    ["T_RSV", {
            keys: reserved,
        }],
    ["T_PTY", {
            keys: new Set([...ptypes])
        }],
    ["T_DTY", {
            keys: new Set([...dtypes])
        }],
    ["T_FTY", {
            keys: new Set([...ftypes])
        }]
]);
export function findToken(keyword) {
    let c_token = null;
    token_t.forEach((e, _) => e.keys.has(keyword) ? c_token = _ : 0);
    return c_token;
}

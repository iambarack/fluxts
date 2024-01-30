import {ptypes, dtypes, ftypes, reserved } from "./types.js"

interface t_interface {
    keys: Set<string>;
}
export const token_t = new Map<string, t_interface>([
    ["T_RSV", {
        keys: reserved,

    }],
    ["T_PTY", { //primitive data types
        keys: new Set<string>([...ptypes])
    }],
    ["T_DTY", { //oop data types
        keys: new Set<string>([...dtypes])
    }],
    ["T_FTY", { //function-like data types
        keys: new Set<string>([...ftypes])
    }]
])

export type Nullable<T> = T | null;

export function findToken(keyword: string) : Nullable<string> {
    let c_token: Nullable<string> = null;
    token_t.forEach((e, _) => e.keys.has(keyword) ? c_token = _ : 0)
    return c_token;
}
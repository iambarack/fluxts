interface t_interface {
    keys: Set<string>;
}
export declare const token_t: Map<string, t_interface>;
export type Nullable<T> = T | null;
export declare function findToken(keyword: string): Nullable<string>;
export {};

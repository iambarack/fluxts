export default class Heap {
    #private;
    constructor();
    saveNum(t: string, v: number): void;
    saveLong(t: string, v: BigInt): void;
    syncNum(t: string, v: number): void;
    syncLong(t: string, v: BigInt): void;
    getNum(t: string): number | null | undefined;
    getLong(t: string): BigInt | null | undefined;
    heapInfo(): void;
    free(): void;
}

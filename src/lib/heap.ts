export default class Heap {
    #num : Map<string, number>;
    #long: Map<string, BigInt>

    constructor() {
        this.#num = new Map<string, number>
        this.#long = new Map<string, BigInt>
    }
    
    saveNum(t : string, v: number) {
        this.#num.has(t) ? console.log('Declaration error! Variable "',t,'" is already declared.') : this.#num.set(t, v);
    }

    saveLong(t: string, v: BigInt) {
        this.#long.has(t) ? console.log('Declaration error! Variable "', t, '" is already declared.') : this.#long.set(t, v);
    }

    syncNum(t: string, v: number) {
        this.#num.has(t) ? this.#num.set(t, v) : console.log('Initialization error! Variable "', t, '" is not declared yet.');
    }
    syncLong(t: string, v: BigInt) {
        this.#long.has(t) ? this.#long.set(t, v) : console.log('Initialization error! Variable "', t, '" is not declared yet.');
    }

    getNum(t:string) : number | null | undefined {
        return this.#num.has(t) ? this.#num.get(t) : (console.log("Invalid variable name! ", t), process.exit());
    }
    hasNum(t: string): boolean {
        return this.#num.has(t)
    }
    getLong(t: string): BigInt | null | undefined {
        return this.#long.has(t) ? this.#long.get(t) : (console.log("Invalid variable name! ", t), process.exit());
    }
    heapInfo() {
        console.log("Heap {\n\tNums", this.#num, "\tLongs", this.#long, "\n}");
    }
    free() {
        this.#num.clear()
        this.#long.clear()
    }
}
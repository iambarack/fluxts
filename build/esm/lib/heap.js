var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Heap_num, _Heap_long;
class Heap {
    constructor() {
        _Heap_num.set(this, void 0);
        _Heap_long.set(this, void 0);
        __classPrivateFieldSet(this, _Heap_num, new Map, "f");
        __classPrivateFieldSet(this, _Heap_long, new Map, "f");
    }
    saveNum(t, v) {
        __classPrivateFieldGet(this, _Heap_num, "f").has(t) ? console.log('Declaration error! Variable "', t, '" is already declared.') : __classPrivateFieldGet(this, _Heap_num, "f").set(t, v);
    }
    saveLong(t, v) {
        __classPrivateFieldGet(this, _Heap_long, "f").has(t) ? console.log('Declaration error! Variable "', t, '" is already declared.') : __classPrivateFieldGet(this, _Heap_long, "f").set(t, v);
    }
    syncNum(t, v) {
        __classPrivateFieldGet(this, _Heap_num, "f").has(t) ? __classPrivateFieldGet(this, _Heap_num, "f").set(t, v) : console.log('Initialization error! Variable "', t, '" is not declared yet.');
    }
    syncLong(t, v) {
        __classPrivateFieldGet(this, _Heap_long, "f").has(t) ? __classPrivateFieldGet(this, _Heap_long, "f").set(t, v) : console.log('Initialization error! Variable "', t, '" is not declared yet.');
    }
    getNum(t) {
        return __classPrivateFieldGet(this, _Heap_num, "f").has(t) ? __classPrivateFieldGet(this, _Heap_num, "f").get(t) : (console.log("Invalid variable name! ", t), process.exit());
    }
    getLong(t) {
        return __classPrivateFieldGet(this, _Heap_long, "f").has(t) ? __classPrivateFieldGet(this, _Heap_long, "f").get(t) : (console.log("Invalid variable name! ", t), process.exit());
    }
    heapInfo() {
        console.log("Heap {\n\tNums", __classPrivateFieldGet(this, _Heap_num, "f"), "\tLongs", __classPrivateFieldGet(this, _Heap_long, "f"), "\n}");
    }
    free() {
        __classPrivateFieldGet(this, _Heap_num, "f").clear();
        __classPrivateFieldGet(this, _Heap_long, "f").clear();
    }
}
_Heap_num = new WeakMap(), _Heap_long = new WeakMap();
export default Heap;

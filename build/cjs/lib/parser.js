"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_js_1 = require("./types.js");
const index_js_1 = require("../index.js");
const tokens_js_1 = require("./tokens.js");
function default_1(arr) {
    let y;
    let t = arr[0][0].replace(/ /g, "");
    if (arr.length > 1)
        y = arr[1][0].replace(/ /g, "");
    //console.log(arr);
    if (types_js_1.ptypes.has(t) && arr.length > 1) {
        arr[0][1] = arr[0][1].replace(/ /g, "");
        //console.log(y, isNaN(y));
        if (t === "num") {
            //console.log([t, arr[0][1], y])
            if (isNaN(Number(y))) {
                index_js_1.heap.saveNum(arr[0][1], y.split("+").map(e => {
                    if (isNaN(e))
                        return index_js_1.heap.getNum(e) ? index_js_1.heap.getNum(e) : (console.log("unexpected variable: ", e),
                            process.exit(0));
                    else
                        return e;
                }).reduce((a, c) => Number(a) + Number(c), 0));
                //console.log(y.split("+"))
            }
            else
                index_js_1.heap.saveNum(arr[0][1].replace(/ /g, ""), Number(y));
        }
    }
    else if (t === "cw") {
        if (arr[0].length == 3) {
            let x = index_js_1.heap.getNum(arr[0][2]);
            if (x)
                (0, tokens_js_1.cw)(arr[0][1].replace(" ", "") + x);
        }
        else {
            if (!index_js_1.heap.hasNum(arr[0][1].replace(/ /g, "")))
                (0, tokens_js_1.cw)(arr[0][1].replace(" ", ""));
            else {
                let x = index_js_1.heap.getNum(arr[0][1].replace(/ /g, ""));
                if (x)
                    (0, tokens_js_1.cw)(x);
            }
        }
    }
    else {
        console.log("unexpected keyword : ", t);
    }
    //todo implement bigint
    //heap.heapInfo();
}
exports.default = default_1;

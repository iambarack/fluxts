var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { lexer } from "./lib/lexer.js";
import { findToken } from "./lib/tokens.js";
import { init } from "./util/helper.js";
import parser from "./lib/parser.js";
import Heap from "./lib/heap.js";
// initialize the program.
init(process.argv.length);
//console.log("types:", ptypes, dtypes, ftypes);
export const heap = new Heap();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Call the lexer for [filename].fx
        const flux = yield lexer(process.argv[2] || ""); //console.log(flux);
        //2. Form a heap for all variables
        //heap.heapInfo()
        heap.saveNum("r0", 0);
        //&1. searching for tokens in lines
        let searchToken = "int";
        let kw = findToken(searchToken);
        for (let i = 0; i < flux.length; i++) {
            let ln = [flux[i]];
            ln = ln.map(e => e.split(/=/g).map(e => e.split(':')))[0];
            // if (flux[i].includes('=')) {
            //     ln = ln.map(e => e.split('='))
            // } if (flux[i].includes(':')) {
            //     ln = ln.map((e,i) => e[ln.length - i-1].split(':'))
            // }
            parser(ln);
            //if includes = assignment operator/function
            //if includes ( or ) function operator seperate at {
            // if includes ? if else operator
            //tokenize using arr.reduce until hit a diff ascii char first token is first index then change tokens and call functions
        }
        //console.log(flux);
        console.log("\nFreeing Memory, Goodbye!\n");
        heap.free();
    });
})();

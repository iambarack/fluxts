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
import { ptypes, dtypes, ftypes } from "./lib/types.js";
import { init } from "./util/helper.js";
import Heap from "./lib/heap.js";
// initialize the program.
init(process.argv.length);
console.log("types:", ptypes, dtypes, ftypes);
// i. ctype main function (immediately invoked)
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Call the lexer for [filename].fx
        const FLUXts = yield lexer(process.argv[2] || "");
        console.log(FLUXts);
        //2. Form a heap for all variables
        const heap = new Heap();
        heap.heapInfo();
        //&1. searching for tokens in lines
        let searchToken = "int";
        let kw = findToken(searchToken);
        for (let i = 0; i < FLUXts.length; i++) {
            const ln = FLUXts;
            //if includes = assignment operator/function
            //if includes ( or ) function operator seperate at {
            // if includes ? if else operator
            //tokenize using arr.reduce until hit a diff ascii char first token is first index then change tokens and call functions
        }
        console.log("\nFreeing Memory, Goodbye!\n");
        heap.free();
    });
})();

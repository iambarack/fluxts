"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heap = void 0;
const lexer_js_1 = require("./lib/lexer.js");
const helper_js_1 = require("./util/helper.js");
const parser_js_1 = __importDefault(require("./lib/parser.js"));
const heap_js_1 = __importDefault(require("./lib/heap.js"));
// initialize the program.
console.time();
(0, helper_js_1.init)(process.argv.length);
//console.log("types:", ptypes, dtypes, ftypes);
exports.heap = new heap_js_1.default();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Call the lexer for [filename].fx
        const flux = yield (0, lexer_js_1.lexer)(process.argv[2] || ""); //console.log(flux);
        //2. Form a heap for all variables
        //heap.heapInfo()
        exports.heap.saveNum("r0", 0);
        //&1. searching for tokens in lines
        //let searchToken : string = "int";
        //let kw: Nullable<string> = findToken(searchToken)
        for (let i = 0; i < flux.length; i++) {
            let ln = [flux[i]];
            ln = ln.map(e => e.split(/=/g).map(e => e.split(':')))[0];
            // if (flux[i].includes('=')) {
            //     ln = ln.map(e => e.split('='))
            // } if (flux[i].includes(':')) {
            //     ln = ln.map((e,i) => e[ln.length - i-1].split(':'))
            // }
            (0, parser_js_1.default)(ln);
            //if includes = assignment operator/function
            //if includes ( or ) function operator seperate at {
            // if includes ? if else operator
            //tokenize using arr.reduce until hit a diff ascii char first token is first index then change tokens and call functions
        }
        //console.log(flux);
        console.log("\n\x1b[34mFreeing Memory, Goodbye!\x1b[0m\n");
        exports.heap.free();
        console.timeEnd();
    });
})();

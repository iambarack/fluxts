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
const lexer_js_1 = require("./lib/lexer.js");
const tokens_js_1 = require("./lib/tokens.js");
const types_js_1 = require("./lib/types.js");
const helper_js_1 = require("./util/helper.js");
const heap_js_1 = __importDefault(require("./lib/heap.js"));
// initialize the program.
(0, helper_js_1.init)(process.argv.length);
console.log("types:", types_js_1.ptypes, types_js_1.dtypes, types_js_1.ftypes);
// i. ctype main function (immediately invoked)
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Call the lexer for [filename].fx
        const FLUXts = yield (0, lexer_js_1.lexer)(process.argv[2] || "");
        console.log(FLUXts);
        //2. Form a heap for all variables
        const heap = new heap_js_1.default();
        heap.heapInfo();
        //&1. searching for tokens in lines
        let searchToken = "int";
        let kw = (0, tokens_js_1.findToken)(searchToken);
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

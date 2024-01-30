import { lexer } from "./lib/lexer.js";
import { findToken, token_t, Nullable } from "./lib/tokens.js"
import { ptypes, dtypes, ftypes, reserved } from "./lib/types.js"
import { init } from "./util/helper.js"
import parser from "./lib/parser.js"
import Heap from "./lib/heap.js"
// initialize the program.
console.time() 

init(process.argv.length);
//console.log("types:", ptypes, dtypes, ftypes);

export const heap = new Heap();

(async function ():Promise<void> {

    //1. Call the lexer for [filename].fx
    const flux = await lexer(process.argv[2] || ""); //console.log(flux);
    
    //2. Form a heap for all variables
    //heap.heapInfo()
    heap.saveNum("r0", 0)
    //&1. searching for tokens in lines
    //let searchToken : string = "int";
    //let kw: Nullable<string> = findToken(searchToken)
    

    for (let i = 0; i < flux.length; i++) {
        let ln : any = [flux[i]];

        ln = ln.map(e => e.split(/=/g ).map(e => e.split(':')))[0]
        // if (flux[i].includes('=')) {
        //     ln = ln.map(e => e.split('='))
        // } if (flux[i].includes(':')) {
        //     ln = ln.map((e,i) => e[ln.length - i-1].split(':'))
        // }
        
        parser(ln)
        
        //if includes = assignment operator/function
        //if includes ( or ) function operator seperate at {
        // if includes ? if else operator
        //tokenize using arr.reduce until hit a diff ascii char first token is first index then change tokens and call functions
    }

    //console.log(flux);
    

    console.log("\n\x1b[34mFreeing Memory, Goodbye!\x1b[0m\n")
    
    heap.free();
    console.timeEnd()

})();


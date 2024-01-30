import { lexer } from "./lib/lexer.js";
import { findToken, token_t, Nullable } from "./lib/tokens.js"
import { ptypes, dtypes, ftypes, reserved } from "./lib/types.js"
import { init } from "./util/helper.js"
import Heap from "./lib/heap.js"

// initialize the program.
init(process.argv.length);
console.log("types:", ptypes, dtypes, ftypes);


// i. ctype main function (immediately invoked)
(async function ():Promise<void> {

    //1. Call the lexer for [filename].fx
    const FLUXts = await lexer(process.argv[2] || ""); console.log(FLUXts);
    
    //2. Form a heap for all variables
    const heap = new Heap(); heap.heapInfo()

    //&1. searching for tokens in lines
    let searchToken : string = "int";
    let kw: Nullable<string> = findToken(searchToken)
    

    for (let i = 0; i < FLUXts.length; i++) {
        const ln = FLUXts;

        //if includes = assignment operator/function
        //if includes ( or ) function operator seperate at {
        // if includes ? if else operator
        //tokenize using arr.reduce until hit a diff ascii char first token is first index then change tokens and call functions
    }




    console.log("\nFreeing Memory, Goodbye!\n")
    
    heap.free();

})();


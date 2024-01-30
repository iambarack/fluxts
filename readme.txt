# Flux is a new programming language.

## Although the compiler is being developed in C, the first version will be released in TypeScript.


## Todos:
[] RHS LHS ops

# Stages:
v0.001
[x] Lexer
[x] addition
[x] basic variables
[x] Variables
[x] cw (stdout)
[] Tokenizer
[] Parser
[] String
[] Operations
[] Binary for compiler

Flux Syntax:

""" 
# main.fx

# Syntax -> [type] : [fn_name([args])] {return [value];};
num : sumFunction (num a, num b){
    int : y = a + b;
    return x;
};

# Syntax -> [type] : [variable_name] = [RHS];
num : numVariable1 = 123;
# num type is automatically determined according to its value.
num : numVariable2 = 100.10;

# console_write is considered as a type. However it does not store but only output the return_val to console.
cw : sumFunction(numVariable1, numVariable2);

# end example
"""

# Next Stages:

v0.1:
[] REPL Ops
[] Syntax Tree
[] Presedence
[] Scope etc.
[] Garbage Collection

v0.2:
[] Functions
[] Types
[] ...

...

Notes: 
> dependency: pkg@5.8.1 
> # directories #
> dist/ -> esm module builds
> build/ -> cjs and crossplatform builds
> src/ -> source files
>    /lib -> libraries
>    /util -> helpers
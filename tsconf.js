
import * as fs from "fs"

const esm = {
    "compilerOptions": {
        "lib": [
            "ESNext"
        ], // Why not use NodeNext if it compiles down anyways
        "target": "ES6",
        // Runtime/Module
        "module": "Node16", // <- ESM Module Type
        "moduleResolution": "Node16", // <- ESM Resolution
        "esModuleInterop": false, // make false for esm
        // Project Structure
        "rootDir": "src",
        "outDir": "build/esm",
        "declaration": true,
        "declarationDir": "types",
        "strict": true,
        "alwaysStrict": false, // <- you can set this to false if your writing ESM
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": [
        "src/**/*.ts",
        "src/**/*.mts"
    ], // You might want to change this
    "exclude": [
        "build",
        "types",
        "node_modules",
        "bak"
    ]
}

const pkg = {
    "compilerOptions": {
        "lib": [
            "ESNext"
        ], // Why not use NodeNext if it compiles down anyways
        "target": "ES6",
        "module": "CommonJS", // <- ESM Module Type
        "moduleResolution": "Node", // <- ESM Resolution
        "noUncheckedIndexedAccess": true, //comment for esm
        "esModuleInterop": true, // make false for esm
        "rootDir": "src",
        "outDir": "build/cjs",
        "declaration": true,
        "declarationDir": "types",
        "strict": true,
        "alwaysStrict": false, // <- you can set this to false if your writing ESM
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }, "include": [
        "src/**/*.ts",
        "src/**/*.mts"
    ], "exclude": [
        "build",
        "types",
        "node_modules",
        "bak"
    ]
}
export async function tsconf(mode){

    //if nonzero arg -> out esm.tsconf else out pkg.tsconf 
    if (Number(mode)) fs.writeFileSync('./tsconfig.json', JSON.stringify(esm))
    else fs.writeFileSync('./tsconfig.json', JSON.stringify(pkg))

}
tsconf(process.argv[2])


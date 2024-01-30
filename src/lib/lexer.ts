import * as fs from "fs"

export async function lexer(filename: string): Promise<string[]> {
    
    var data = fs.readFileSync(filename);

    return data.toString().replace(/[\r \n]/g, "")
        .split(/;/g).filter(e => e.length)
        //.map(l => l.split(""))

}

// export async function lexer(filename: string): Promise<string[][]> {

//     var data = fs.readFileSync(filename);

//     return data.toString().replace(/[\r, ]/g, "")
//         .split(/[\n,\s]/)
//         .map(l => l.split("")).filter(e => e.length)

// }
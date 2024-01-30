import { ptypes } from "./types.js";
import { heap } from "../index.js"
import { cw } from "./tokens.js";
export default function(arr : string[][]) {

    let y: string | any;
    let t : string | any = arr[0][0].replace(/ /g, "");
    
    if (arr.length > 1) y = arr[1][0].replace(/ /g, "");
    //console.log(arr);

    if(ptypes.has(t) && arr.length > 1) {
        arr[0][1] = arr[0][1].replace(/ /g, "");
        //console.log(y, isNaN(y));

        if(t === "num") {
            //console.log([t, arr[0][1], y])
            
            if(isNaN(Number(y))) {
                heap.saveNum(arr[0][1],
                    y.split("+").map(e => {
                        if(isNaN(e)) return heap.getNum(e) ? heap.getNum(e) : (console.log("unexpected variable: ", e),
                        process.exit(0));
                        else return e;
                    }).reduce((a:number,c:number) => Number(a) + Number(c), 0))
                //console.log(y.split("+"))
            
            }
            else heap.saveNum(arr[0][1].replace(/ /g, ""), Number(y))
        }
    } else if (t === "cw") {
        if(arr[0].length == 3) {
            let x = heap.getNum(arr[0][2])
            if (x) cw(arr[0][1].replace(" ", "") + x);
        } else {
            
            if (!heap.hasNum(arr[0][1].replace(/ /g, ""))) cw(arr[0][1].replace(" ", ""))
            else {
                let x = heap.getNum(arr[0][1].replace(/ /g, ""))

                if (x) cw(x);
            }

        }
        
        
    }  else {
        console.log("unexpected keyword : ",t);
        
    }
    
    //todo implement bigint

    //heap.heapInfo();


}
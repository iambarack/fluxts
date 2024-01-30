"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
function init(argc) {
    console.log("\n\x1b[42m:: flux ::\x1b[0m\n");
    if (!(argc == 3)) {
        console.log("Incorrect usage, please call with:\n $ flux [filename].fx\nExiting Process, Goodbye!\n");
        process.exit(0);
    }
}
exports.init = init;

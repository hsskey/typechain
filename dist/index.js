"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "125415125", "", "Hello", 20180717);
let blockchaine = [genesisBlock];
console.log(blockchaine);
//# sourceMappingURL=index.js.map
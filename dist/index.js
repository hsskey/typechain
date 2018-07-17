"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class women {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const ria = new women("herim", 30, "female");
const whoAmI = (ria) => {
    return `Hello ${ria.name}, you are ${ria.age} old and  you are ${ria.gender}`;
};
console.log(whoAmI(ria));
//# sourceMappingURL=index.js.map
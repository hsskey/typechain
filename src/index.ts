class women  {
    public name : string;
    public age  : number;
    public gender : string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const ria = new women("herim",30,"female");

const whoAmI = (ria : women) : string => {
    return `Hello ${ria.name}, you are ${ria.age} old and  you are ${ria.gender}`;
}

console.log(whoAmI(ria));

export {};
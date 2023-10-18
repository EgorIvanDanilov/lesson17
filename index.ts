console.log("welcome to ts");
let x: string = "hello";
console.log(x);

let y: string;
y = "Peter";

let year: number = 1994;

type Age = number;

let myzAge: Age = 30;

let yourAge: number | string = 18;

type Animal = "cat" | "dog";
let myPet: Animal = "cat";

type ExtendedPet = Animal | "parrot";
let yourPet: ExtendedPet = "cat";
//array strings
let fruits: string[] = ["apple", "orange", "pear"];
//array boolean
let answers: boolean[] = [true, false, false];

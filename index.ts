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
let wildAnimal = "lion";
//array strings
let fruits: string[] = ["apple", "orange", "pear"];
//array boolean
let answers: boolean[] = [true, false, false];

type User = {
  firstName: string;
  isAdmin: boolean;
  age?: number; //указываем необязательное поле через?
};

type VipUser = User & {
  isVip: true;
};

const user1: User = { firstName: "Jake", isAdmin: true };
const vip: VipUser = { firstName: "John", isAdmin: false, isVip: true };
// interface
interface IMagician {
  name: string;
  hasWand: boolean;
  faculty: string;
}

interface IBlackmagician extends IMagician {
  hasBlackMagic: true;
}
const voldemort: IBlackMagician = {
  name: "Voldemort",
  hasWand: true,
  faculty: "Sliserin",
  hasBlackMagic: true,
};

interface City {
  population: number;
  foundationDate: number;
  isRiver: boolean;
  riverName?: string;
}

interface TouristicCity extends City {
  isTouristic: boolean;
  touristicName?: string;
}

const paris: TouristicCity = {
  population: 600000,
  foundationDate: 1200,
  isRiver: true,
  riverName: "Seina",
  isTouristic: true,
  touristicName: "Poris",
};
// Типизация
// типизируем параметры и возвращаем значение
//function sum(a: number, b: number, c: string): number {
//    return '${c} ${a+b}'
//}

//console.log(sum(33, 99, `sum'))

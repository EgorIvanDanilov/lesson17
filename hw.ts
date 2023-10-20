//1
function getSecondElement(arr: string[]): string {
  return arr[1];
}
const res = getSecondElement(["Earth", "Mars", "Saturn"]);
console.log(res);
//2

const getWeatherDesc = (code: "sun" | "strm" | "fog") => {
  switch (code) {
    case "sun":
      return "sunny";
    case "strm":
      return "storm";
    case "fog":
      return "foggy weather";
    default:
      return "";
  }
};
console.log(getWeatherDesc("sun"));

//3
interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const boeing: Airplane = {
  numberOfEngines: 4,
  isJet: false,
  maxHeight: 200,
  capacity: 300,
};

// generics
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirstElement<string>(["Earth", "Mars", "Saturn"]));
console.log(getFirstElement<number>([23, 1, 44]));

function consoleSmth<T>(smth: T): void {
  console.log(name);
}
consoleSmth(112);
consoleSmth("Peter");

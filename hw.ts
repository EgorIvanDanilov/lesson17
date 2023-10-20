//1
function getSecondElement(arr: string[]): string {
return arr[1];
}
const res = getSecondElement(['Earth', 'Mars', 'Saturn'])
console.log(res);
//2

const getWeatherDesc = (code:'sun'|'strm'|'fog') => {
    switch (code) {
        case 'sun':return 'sunny';
        case 'strm':return 'storm';
        case 'fog':return 'foggy weather';
        default:return '';
    }
}
console.log(getWeatherDesc("sun"));

//3
interface Airplane {
    numberOfEngines:number;
    isJet:boolean;
    maxHeight:number;
    capacity?:number;
}

сonst boeing: Airplane = {
    numberOfEngines:4,
    isJet:false,
    maxHeight:200,
    capacity:300,
}

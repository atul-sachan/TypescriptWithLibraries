export namespace CalculatorService {
    export function add(... number: number[]): number{
        let sum = 0;
        number.forEach(number => sum += number);
        return sum;
    }
}
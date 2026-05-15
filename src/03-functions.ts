// Basic func with types
function add(a: number, b: number): number {
    return a + b;
}

// Optional Parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}`;
    }
    return `hello, ${name}!`;
}

// Default Parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

// Rest Parameters : array
function sum(...numbers: number []): number{
    return numbers.reduce((total, n) => total + n, 0);
}

// Arrow func
const divide = (a: number, b: number): number => {
    return a / b;
}
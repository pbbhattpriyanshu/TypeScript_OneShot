// Primitives 
let username: string = "Puishbhatt";
let age: number = 21;
let isAdmin: boolean = true;

// Arrays
let marks: number[] = [7,9,2,5,8,4];
let names: string[] = ["Max", "Mumbasa"];

// Tuples
let person:[string, number] = ["Piyush", 56];

// Enum
enum Status {
    Pending,
    Done,
    Abort
}

let study: Status = Status.Done;
let walking: Status = Status.Abort;

// Any (avoid when possible) 
let randomValue: any = 10;
randomValue = "Piyush";
randomValue = true;

// 'any' type allows a variable to take any value, it effectively defeats the purpose of TypeScript's type checking.

// Unknown (safer then any)
let userInput: unknown;
userInput = 34;
userInput = "piyush";

//  the 'unknown' type is considered a safer alternative because it imposes more restrictions on how the value can be used, requiring developers to perform type checks or assertions before interacting with the data.

// Void (for function that don't return)
function follow(name: string, message:string): void {
    console.log("Thankyou " + name + " from " + message);
}

function subscribe(name: string, message:string): string {
    //console.log(message);

    return "Thankyou " + name + " from " + message
}

// Null and Undefined
let nullValue: null = null;
let UndefinedValue: undefined = undefined;
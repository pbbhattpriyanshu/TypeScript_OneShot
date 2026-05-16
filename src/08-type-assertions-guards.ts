// Type Assertion

// Angle-bracket syntax:
let someContent: unknown = "Hello, TypeScript!";
let contentLength: number = (<string>someContent).length;

// as syntax (preferred in modern TypeScript):
let someValue: unknown = "Subscribe to Me";
let strLength: number = (someValue as string).length;


// Type guards
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // TypeScript knows value is a string here
    } else {
        console.log(value.toFixed(2)); // TypeScript knows value is a number here
    }
}

// instanceof Operator:
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function handleAnimal(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows animal is a Dog here
    } else {
        animal.meow(); // TypeScript knows animal is a Cat here
    }
}
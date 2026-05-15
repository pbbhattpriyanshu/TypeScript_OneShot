// Interface
interface User {
    name: string,
    age: number,
    email?: string //Optional
}

let user: User = {
    name: "Puish",
    age: 21,
    email: "bhattpuish@gmail.com"
};

// Object type notation - its look messy
// let user: {name: string, age: number} = {
//     name: "Puish",
//     age: 21,
// };
class Person {
    //Properties
    private name: string;
    protected age: number;
    public email: string;

    //Constructor
    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    //Methods
    public introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old and this is my email: ${this.email}`
    }
}

// 2nd Way to Write
class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
    ) {}

    getDetails(): string {
        return `${this.name} work in ${this.department}`
    }
}

let piyush = new Person("Piyush", 21, 'bhattpiyush@gmail.com')
let mark = new Employee(45, "Mark", 'Banking Sector');

console.log(piyush.introduce());
console.log(mark.getDetails());

// Inheritance 
class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamsize: number,
    ) {
        super(id, name, department);
    }

    getInfo(): string {
        return `${this.name} manages ${this.teamsize} peoples`;
    }
}


let nick = new Manager(23, 'Nick', "Developer", 9);

console.log(nick.getInfo());
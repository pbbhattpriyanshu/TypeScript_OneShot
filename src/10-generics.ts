// Generics in Typescript
function identity<MyType>(args: MyType): MyType{
    return args;
}

let output1 = identity<string>("Subscribe");
let output2 = identity<number>(12);

// Generics with arrays
function getFirstElement<MyType>(arr: MyType[]): MyType{
    return arr[0];
}

let myNum = getFirstElement([1,2,4]);
let myName = getFirstElement(["piyush", "mark", "lockesh"]);

// Generics Interfaces
interface KeyValuePair<K, V>{
    key: {
        name: string;
        myKey: K;
    };
    value: V;
};

let stringNumberPair: KeyValuePair<string, number> = {
    key: {
        name: "puish",
        myKey: "",
    },
    value: 27
};

// Generic Clsses
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Error: number doesn't have length
// Type alias
type Point = {
    x: number,
    y: number,
}

let point: Point = { x: 10, y: 20 };

// Type alias for primitive
type ID = string | number;

let userId: ID = "Puish123";
let productId: ID = 12;

// Type alias vs Interface

// Type Alias

// Definition: A type alias is used to define a custom type for objects, primitives, unions, or intersections.
// Flexibility: Can define primitive types, unions, intersections, and tuples.
// Extending: Can use intersections (&) to combine multiple types.
// Usage: Often used for more complex types or when working with unions and intersections.

// Interface

// Definition: An interface is specifically designed to define the shape of objects.
// Extending: Can extend other interfaces or classes using the extends keyword.
// Merging: Interfaces with the same name are automatically merged, which is useful for extending third-party types.
// Usage: Preferred for defining object shapes, especially when working with classes or extending types.
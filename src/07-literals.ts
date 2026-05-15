// String literal types
let direction: "north" | "south" | "east" | "west";
direction = "east"

// Numeric literal types
let dice: 1|2|3|4|5|6;
dice = 5;

// Combining with other type
type SucessResponse = {
    status: "success",
    data: any
};

type ErrorResponse = {
    status: "error",
    message: string
}

type APIResponse = SucessResponse | ErrorResponse;
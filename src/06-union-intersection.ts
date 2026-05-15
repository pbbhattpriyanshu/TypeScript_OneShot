// Union types (OR)
type View = "pending" | "approved" | "rejected"

function setStatus(status: View): void {
    console.log(`Status set to: ${status}`);
}

setStatus("approved");

// Intersection types (AND)
interface Color {
    color: string
}

interface Circle {
    radius: number
}

type ColorfullCircle = Color & Circle;

let myCircle: ColorfullCircle = {
    color: "Red",
    radius: 10
}
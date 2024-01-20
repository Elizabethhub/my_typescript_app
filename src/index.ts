import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
let total: number = 100;
// let user: string = "Bob";
let isActive: boolean = false;
let empty: null = null;
let noInfo: undefined = undefined;
// user = "5";
const numbers: number[] = [1, 2, 3, 4, 0];
// const user: { name: string; age: number } = {
//   name: "bob",
//   age: 6,
// };
type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "bob",
  age: 6,
};
type eventTYpe = "lesson" | "deadline";
const event: eventTYpe = "deadline";

// union type:
type size = "small" | "medium" | "large";

// колекція констант:
enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

const button3: size = "medium";
const button2: Size = Size.small;

function add(num1: number, num2: number): string {
  return `${num1} + ${num2}`;
}

add(1, 1);
function voidNothing(num1: number, num2: number): void {
  console.log("first", `${num1} + ${num2}`);
}
function voidUser(user: User): void {
  console.log(`hello ${user.name}`);
}

// var age = 20;
// if(age < 20) 
//   age += 10;

// function calc(income: number, tax: number): number {
//  if(tax < 50_000) {
//   return income;
//  }
//  return income;
// }
// calc(2, 34);

// Objects

let  x: string = "abc";
let y: number = 10;
let arr = [];


const emp : {
  readonly id: number,
  name: string,
  fullName: () => void
} = { id: 1, name: "" , fullName: (date: Date)=> {
  console.log("date", date)
}}
console.log("emp", emp)
// primitive  (value)
// non-primitive (referance)

// object (array,object,function)

// {} , []

// primitive - immultiple
// non-primitive -  multiple

// let num = 14
// num = 13

// let user ={
//     name:"Ayxan",
//     footballTeam:"Arsenal"
// }

// user.name = "Anar"

// let a = 14

// let user ={
//     name:"Ayxan",
//     footballTeam:"Arsenal"
// }

// let a = 14
// let b = a

// ==
// console.log(a == b);

// let user = {
//   name: "Ayxan",
//   footballTeam: "Arsenal",
// };

// let user2 = user
// console.log(user == user2);

// let a = 14
// let b = 14
// console.log(a==b);

// let a = 14
// let b = a  //  ->14
// a = 10
// console.log(a);
// console.log(b);

let user = {
  name: "Ayxan",
  footballTeam: "Arsenal",
};

let user2 =user;

user.name = "Emin"

console.log(user.name);
console.log(user2.name);


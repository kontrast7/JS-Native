// string, number, boolean, undefined, null, NaN, Infinity, Symbol, BigInt



//Ссылочный тип данных
// array, object
// function -> call, bind, apply, name,



// изменение значения
let numOne = 10;
let numTwo = numOne;
numOne = "hey";
console.log(numOne);
console.log(numTwo);

const userOne = {
  name: "Alex",
  age: 25,
  friends: ["Max", "Bob"],
};



// передача по ссылке
const userTwo = userOne;
// изменили в оригинале
userTwo.name = "Ann";
console.log(userOne);
console.log(userOne === userTwo);



// создание копии поверхностной
// (массивы и обьекты внутри этого обьекта останутся ссылками)
let userThree = { ...userOne };
console.log(userThree);
console.log(userOne === userThree);



// глубокое копирование
const userFive = { ...userOne, friends: [...userOne.friends] };



// метод map
const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 120,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Michel",
    age: 20,
    isMarried: false,
    scores: 89,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
  },
];



// получаем все имена
const names = students.map((st) => st.name);
console.log("получаем все имена - " + names);



// проходим по массиву и получаем данные
const aaaa = (st, i) => {
  return `st#${i + 1} Привет! Я - ${st.name}. Мне ${st.age} года.`;
}
const getStudent = students.map(aaaa);
console.log("проходим по массиву и получаем данные - " + getStudent);



// копия обьекта
const a = students.map((st) => {
  return { ...st };
});
console.log("копия обьекта - " + a);



// копия обьекта
const b = students.map((st) => ({ ...st }));
console.log("копия обьекта - " + b);

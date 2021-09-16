const todoList_ID_1 = "54rty54";
const todoList_ID_2 = "65w4634btb43";

const todoLists = [
  { id: todoList_ID_1, title: "What To Learn", filter: "all" },
  { id: todoList_ID_2, title: "What To Buy", filter: "all" },
];

const tasks = {
  [todoList_ID_1]: [
    { name: "HTML", isDone: true },
    { name: "CSS", isDone: true },
    { name: "JS", isDone: false },
  ],
  [todoList_ID_2]: [
    { name: "Meat", isDone: true },
    { name: "Fish", isDone: false },
    { name: "Bread", isDone: true },
  ],
};

console.log(tasks[todoList_ID_1].find((t) => t.name === "CSS"));

function findName(taskName) {
  /*  const rez = [];*/
  const rez = {
    [taskName]: [],
  };
  for (let key in tasks) {
    const task = tasks[key].find((f) => f.name === taskName);
    if (task) {
      rez[taskName].push(task);
    }
    /*    if (task) {
      rez.push(task);
    }*/
  }
  return rez;
}

console.log(findName("Bread"));

// REDUCE

const numbers = [2, 65, 1684, 13, 7, 9, 8, 123, 1];

const sum = numbers.reduce((acc, el) => acc + el, 0);
console.log(sum);

const max = numbers.reduce((acc, el) => (acc > el ? acc : el));
console.log(max);

const min = numbers.reduce((acc, el) => (acc < el ? acc : el));
console.log(min);

let students = [
  { name: "Alex", age: 19, isMarried: false, scores: 100 },
  { name: "Bob", age: 21, isMarried: false, scores: 120 },
  { name: "Nick", age: 23, isMarried: true, scores: 140 },
  { name: "Frank", age: 17, isMarried: false, scores: 105 },
  { name: "Oleg", age: 26, isMarried: true, scores: 90 },
];

const sumOfScores = students.reduce((acc, el) => acc + el.scores, 0);
console.log(sumOfScores);

const sumOfScoresMore100 = students.reduce((acc, el, i) => {
  if (el.scores >= 100) {
    acc.push(el);
    return acc;
  }
  return acc;
}, []);
console.log(sumOfScoresMore100);

const addPropsIsStudentsWithStudents = students.reduce((acc, el) => {
  return [...acc, { ...el, isStudents: el.scores >= 100 }];
}, []);
console.log(addPropsIsStudentsWithStudents);

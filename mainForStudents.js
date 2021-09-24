const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"],
};


//1. Создайте поверхностную копию объекта user
let copyUser = { ...user };

//Проверка:
/*console.log(user===copyUser)*/
// - что должно быть в консоли?
/*console.log(user.friends===copyUser.friends)*/
// - что должно быть в консоли?


//2. Полная (глубокая) копия объекта user
let deepCopyUser = JSON.parse(JSON.stringify(user));

//Проверка:
/*console.log(user===deepCopyUser)*/
//- что должно быть в консоли?
/*console.log(user.friends===deepCopyUser.friends)*/
//- что должно быть в консоли?


//3. Поверхностная копия массива students
let copyStudents = { ...students };

//Проверка:
/*console.log(copyStudents === students)*/
// - что должно быть в консоли?
/*console.log(copyStudents[0] === students[0])*/
// - что должно быть в консоли?


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map((m) => ({ ...m }));
/*let deepCopyStudents = JSON.parse(JSON.stringify(students))*/
//Проверка:
/*console.log(deepCopyStudents===students)*/
//- что должно быть в консоли?
/*console.log(deepCopyStudents[0]===students[0])*/
// - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль


//5. Отсортируйте deepCopyStudents по алфавиту (sort)
/*let sortByName = deepCopyStudents.map(m=>m.name)*/
let sortByName = deepCopyStudents.sort(function (a, b) {
  let nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB)
    //сортируем строки по возрастанию
    return -1;
  if (nameA > nameB) return 1;
  return 0; // Никакой сортировки
});
/*console.log(sortByName);*/


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort(function (a, b) {
  let scoresA = a.scores,
    scoresB = b.scores;
  if (scoresA < scoresB) return 1;
  if (scoresA > scoresB) return -1;
  return 0;
});
/*console.log(sortByScores);*/


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = sortByScores.filter((f) => f.scores >= 100);
/*console.log(bestStudents)*/


//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = bestStudents.splice(0, 3);
/*console.log(topStudents)
console.log(deepCopyStudents)*/


//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
/*console.log(newDeepCopyStudents)*/


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter((f) => f.isMarried === true);
/*console.log(notMarriedStudents)*/


//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map((m) => m.name);
/*console.log(studentsNames)*/


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(" ");
/*console.log(nameWithSpace)*/
let namesWithComma = studentsNames.join();
/*console.log(namesWithComma)*/


//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map((m) => ({ ...m, isStudent: true }));
/*console.log(trueStudents)*/


//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map((m) =>
  m.name === "Nick" ? { ...m, isMarried: true } : m
);
/*console.log(studentsWithMarriedNick)*/


//11. Найдите студента по имени Ann (find)
let ann = students.find((f) => f.name === "Ann");
/*console.log(ann)*/


//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((acc, el, i) => {
  if (el.scores >= 120) {
    acc.push(el);
    return acc;
  }
  return acc;
}, []);
/*console.log(bestStudent)*/


//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
/*console.log(scoresSum)*/

// Д.З.:
// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (students) => {
    let a = students.map(m=>( {...m, friends: [...students.filter(f=> f.name !== m.name)].map(stu=> stu.name)  }  )  )
    return a
}
/*
console.log(add(students))*/

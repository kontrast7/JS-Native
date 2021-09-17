/*const array = [10, 90, 30, 80, 50, 100, 70, 20, 40, 60];*/

/*const sort1 = (arr) => {
  let res = [];
  const len = arr.length;
  for (let j = 0; j < len; j++) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > Number(max)) {
        max = arr[i];
      }
    }
    res.unshift(...arr.splice(arr.indexOf(max), 1));
  }
  return res;
};
console.log(sort1(array));*/

/*
const sort2 = (arr) => {
  let res = [];
  const len = arr.length;
  for (let j = 0; j < len; j++) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > Number(max)) {
        max = arr[i];
      }
    }
    arr = arr.filter((el) => el !== max);
    res.unshift(max);
  }
  return res;
};

console.log(sort2(array));
*/

// BUBLE
/*for (let j = 0; j < array.length - 1; j++) {
  let isSorted = true
  for (let i = 0; i < array.length - 1 - j; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false; //// ; -> IMPORTANT!!!!!!!
      // let temp = array[i]
      // array[i] = array[i + 1]
      // array[i + 1] = temp
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
    }
  }
  if(isSorted){
    break
  }
}*/

/*const total = (((array.length + 1) * array.length) / 2) * 2;
console.log(total);*/

const array = [5, 8, 10, 15, 7, 9, 13, 12, 14, 6];
/*let n = 5;
let m = 15;*/

/*while (n++ < m) {
  if (!array.includes(n)) {
    console.log(n);
  }
}*/

let missingNumbers = (a) =>
  Array.from(Array(Math.max(...a)).keys())
    .map((n, i) => (a.indexOf(i) < 0 ? i : null))
    .filter((f) => f);

console.log(missingNumbers(array));

function findNumber(arr) {
  let n = arr.length;
  let total = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    total -= arr[i];
  }
  return total;
}

findNumber(array); // 9
console.log(findNumber(array));

Array.from({ length: Math.max(...b) }, (_, x) =>
  !b.includes(x + 1) ? x + 1 : false
).filter(Boolean);

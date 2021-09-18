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


/*const array = [5, 8, 10, 15, 7, 9, 13, 12, 14, 6];
let n = 5;
let m = 15;*/

/*function f(arr) {
  let t = 0;
  let sum = ((n + m) * (m - n + 1)) / 2;
  while (arr.length > t) {
    let temp = array[t];
    sum -= temp;
    t++;
  }
  return sum;
}
console.log(f(array));

const f1 = (arr) => {
  while (n++ < m) {
    if (!arr.includes(n)) {
      return n;
    }
  }
};
console.log(f1(array));*/

const array = [5,8,10,15,7,9,13,12,14,6];


let n = 5
let m = 15
result = 0
const findmum = (array)=>{
  let i = 0
  while(n<m) {
    debugger
    result = result + n - array [i]
    console.log(result)
    n++
    i++
  }
  return m + result
}

console.log(findmum(array))
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

let names = students.map(st => st.name)
console.log(names);

function map(arr, call) {
        const newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr[i] = call(arr[i])
    }
    return newArr
}

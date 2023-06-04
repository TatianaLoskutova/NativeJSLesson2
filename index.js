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
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// CRUD

// C => [...students, newStudent]  spread и новы студент
// R => arrayObj.map(obj => JSX.Element)
// U => arrayObj.map(obj => condition ? {...obj, prop: newValue} : obj) в свойство новое валью
// D => arrayObj.filter(obj => condition)


// MAP в классическом виде
const getNames = (array) => {
    const result = []
    // что именно происходит с исходным объектом
    const getValueForResult = el => el.name
    for (let i = 0; i < array.length; i++) {
        result.push(getValueForResult(array[i]))
    }
    return result
}
console.log(getNames(students))

const getGreetings = (array) => {
    const result = []
    const getValueForResult = el => `Hi, ${el.name}!`
    for (let i = 0; i < array.length; i++) {
        result.push(getValueForResult(array[i]))
    }
    return result
}

const getNewArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]))
    }
    return result
}
console.log(getNewArray(students, el => el.name))
console.log(getNewArray(students, el => `Hi, ${el.name}!`))
console.log(students.map(el => el.name))  // внутри функция
console.log(students.map(el => `Hi, ${el.name}!`))


// FILTER в классическом виде
const selfMadeFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(func(array[i]))
        }
    }
    return  result
}

console.log(selfMadeFilter(students.filter(st => st.name !== 'Bob')))

// CONCAT
const myConcat = (array_1, param) => {
    // проверяем param массив али нет
    if(Array.isArray(param) === true){
        return [...array_1, ...param]
    } else {
        return [...array_1, param]
    }
}
console.log(myConcat([1, 2, 3], [4, 5]))
console.log(myConcat([1, 2, 3], 4))

//Includes
const myIncludes = (array, item ) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true
        }
    }
    return false
}
console.log(myIncludes([12, 3], 3))

// REverse
const myReverse = (array) => {
    for (let i = 0; i <= Math.floor((array.length - 1 )/ 2); i++) {
        // let temp = array[i]
        // array[i] = array[array.length - 1 - i]
        // array[array.length - 1 - i] = temp
        // деструктурирующее присваивание ниже. Там не массив
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
    }
    return array
}
console.log(myReverse([1, 2, 3, 4]))
console.log(myReverse([1, 2, 3, 4, 5]))
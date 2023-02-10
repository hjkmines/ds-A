const arr = [1, 2, 3, 4, 5]

const total = arr.reduce((total, num) => total + num, 0)

const groups = [
    {
        age: 15
    },
    {
        age: 25
    },
    {
        age: 35
    },
    {
        age: 45
    },
    {
        age: 55
    },
]

// [15, 25, 35]

const youngPeople = groups.reduce((acc, { age }) => {
    if (age <= 40) {
        acc.push(age)
    }
    return acc
}, [])

console.log(youngPeople)
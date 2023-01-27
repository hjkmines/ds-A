const profile = {
    name: 'Tony Kim', 
    age: 88, 
    address: 'some address',
    favorites: [
        'star wars', 
        'lord of the rings', 
        'elf'
    ], 
    nested: {
        moreNested: {
            sayHello: 'hiiiii'
        }
    }
}

const {
    age, 
    nested: {
        moreNested: {
            sayHello
        }
    }
} = profile 

console.log('NEW', sayHello)
console.log(profile.nested.moreNested.sayHello)

//access
console.log(profile.name) // dot notation: YOU USE IT FOR JUST RETRIEVING A SPECIFIC KEY!
console.log(profile['name']) // bracket notation: YOU USE IT FOR JUST RETRIEVING A SPECIFIC OR DYNAMIC KEY!

//setting
// profile.gender = 'Male'
profile['gender'] = 'Male'

console.log(profile)

// for loop 
for (let prop in profile) {
    if (Array.isArray(profile[prop])) {
        profile[prop].forEach(movie => console.log(movie))
    }
}

//methods 
// Object.keys transforms and returns a array of keys
const allTheKeys = Object.keys(profile) //--> ['name', 'age', 'address]
// console.log(allTheKeys)

// Object.values transforms and returns a array of keys
const allTheValues = Object.values(profile) //--> ['Tony', 88, 'some address]
console.log(allTheValues)

// check if a array is empty 
const arr = []; 

const isArrEmpty = !arr.length ? true : false; 

console.log(isArrEmpty)

// Object.entries which returns you both the key and value
const allTheEntries = Object.entries(profile); 
console.log(allTheEntries)





const numbers = [
    {
        num: 1, 
        age: 2
    },
    {
        num: 2, 
        age: 3
    }
]

for (const { num, age } of numbers) {
    console.log(num, age)
}
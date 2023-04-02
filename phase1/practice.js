// const letters = [
//     {
//         letter: 'T'
//     },
//     {
//         letter: 'o'
//     },
//     {
//         letter: 'n'
//     },
//     {
//         letter: 'y'
//     },
// ]

// // 'Tony'

// const putTogether = (letters) => {
//     //create a variable to store Tony
//     //for of loop and put the letters together
//     //return Tony
//     let newWord = ''

//     for (const obj of letters) {
//         //console.log(obj.letter)
//         newWord += obj.letter
//     }

//     console.log(newWord)
// }


// putTogether(letters)

// const profile = {
//     num1: 9, 
//     num2: 8, 
//     num3: 4
// }

// // [4, 8, 9]

// const assortedArr = (obj) => {
//     //change my object into an array
//     //include each number in accending order
//     // return an array in accending order
//     const array = Object.values(obj)
//     console.log(array.sort())
   
// }

// const someObj = new Object()

// assortedArr(profile)

// ////////////////////////////

// const names = [
//     'Tony', 
//     'Maria', 
//     'Mai', 
//     'Johnny', 
//     'Alexander', 
//     'Kristina'
// ]

// const newListOfNames = names => {
//     //loop through each name and find names that are longer than 4 characters
//     //display the new array

//     const array = []

//     for(const name of names) {
//         if (name.length > 4 )
//         array.push(name)
//     }
//     console.log(array)
// }

// newListOfNames(names)


const profile1 = {
    name: 'Tony', 
    age: 88, 
    friends: [
        {
            name: 'Maria', 
            age: 30
        }, 
        {
            name: 'Tom', 
            age: 20
        }, 
        {
            name: 'Jack', 
            age: 25
        }, 
        {
            name: 'Bob', 
            age: 55
        }
    ]
}

// [
//     {
//         name: 'Maria', 
//         age: 30
//     }, 
//     {
//         name: 'Tom', 
//         age: 20
//     }, 
//     {
//         name: 'Jack', 
//         age: 25
//     }
// ]

const underThirty = payload => {
//loop throught the array and compare the age keys and find the friends who are 30 and under
//display the new object of friend who are 30 and under

    let sumOfAge = 0
    const friendList = payload.friends
    const newfriendList = friendList.filter(friend => friend.age <= 30)
    for(let i = 0; i < newfriendList.length ; i++) {
        sumOfAge += newfriendList[i].age
    }

    console.log(sumOfAge)
}

underThirty(profile1)
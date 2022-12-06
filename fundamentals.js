const numbers = [1, 2, 4, 3, 4, 5]

NM - Non-Mutative 
M - Mutative 

// filter() - NM - O(n)
const newNumbers = numbers.filter(num => num !== 3)

// find() - NM - O(n)
const findThree = numbers.find(num => num === 3)

// slice(startIndex, endIndex - optional ) - NM - O(1)
numbers.slice(2, 4)

// splice(startIndex, deleteCount, itemsToAddX1, itemsToAddX2, ..... ) - M - O(n)
numbers.splice(2, 1, 4)

// flat - NM - O(n)
const arrFlat = [[[1, 2]], [3, 4]]
numbers.flat(2)

// includes() - O(n) - NM
numbers.includes(4) // true or false 

// forEach() O(n) ---> this ALWAYS returns undefined
numbers.forEach(num => num + 2)

// map() O(n) ---> ALWAYS RETURNS A NEW COPY of a array 
numbers.map(num => {
	return num + 2
})

// for... of 

for (let i of num) {
	console.log(i)
}

const numbers = [
  {
		num: 1, 
    age: 88
  },
  {
		num: 18, 
    age: 222
  },
  {
		num: 4, 
    age: 99
  },
]

for (const { num, age } of numbers) {
	console.log(num, age)
}

for (const obj of numbers) {
	console.log(obj.num, obj.age)
}

// for...loop 

for (let i = 0; i < num.length; i++) {

}

// reduce((prev, curr, index, array), callback, initialValue) - O(n)

// sum 
const sum = num.reduce((total, current) => total + current, 0)



// object

const profile = {
	name: 'tony', 
  age: 99
}

// set new key-value pairs
profile.address = 'some address'
profile['address'] = 'some address'

// accessing 
profile.address
profile['address']

// for...in is to iterate through enumerable properties (aka key-value pairs)

for (const prop in profile) {
	console.log(profile[prop])
}

// converting the keys to a array
const properties = Object.keys(profile) ---> ['name', 'age', 'address']

// converting the values to a array 
const values = Object.values(profile) ---> ['tony', 99, 'some address']


// set - is like a array, it ONLY holds unique values { 1, 2, 3, 4, 5 }

// creating a new set 
const secondArray = [1, 2, 3, 3, 4, 5]
const newSet = new Set(secondArray); 

// adding a new item 
newSet.add('hi')

newSet.add(200)

newSet.add('hi')


// check if a value exists 

// compared to a array, where if you want check if a value exists
.find() ---> O(n)
.includes() ---> O(n)

newSet.has(200) ---> O(1)

// O(n^2)
for (let i of nums) {
	const secondArray.find(nums[i])
}

// O(n)
for (let i of nums) {
	const newSet.has(nums[i]) ---> O(1)
}

1 * n ---> n


// map - sister to the object ---> { name => 'tony', age => 99}

// creating a map 

const newMap = new Map()

// adding new key value pairs

newMap.set('name', 'tony'); 

// check if a value exists - O(1)

newMap.has('tony') --> true or false 

// retrieve a value  

newMap.get('name') --> 'tony'



// complicated object

const difficult = {
	profile: {
		name: 'tony', 
    age: 88, 
    favoriteMovies: [
      'SpiderMan', 
      'Batman', 
      'Top Gun'
    ]
  }, 
  schools: {
		colleges: {
			duke: {
				price: 200
      }
    }
  }
}

// difficult.profile.name ---> 'tony'

// difficult.schools.colleges.duke.price ---> price

const {
	profile: {
		name, 
    age
  }, 
  schools: {
		colleges: {
			duke: {
				price
      }
    }
  }
}

console.log(price)






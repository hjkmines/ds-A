const fetch = require('node-fetch')

const getCharacter = async (id) => {
    try {
        const fetchedData = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const realData = await fetchedData.json() //
        if (realData.error) throw new Error('Something bad happened')
    } catch (err) {
        console.log(err.message)
        console.log(`HEY! You messed up! Here is the error ${err.message}`)
    }
}


getCharacter('a')
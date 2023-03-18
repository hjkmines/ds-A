const profile = {
    name: 'Tony', 
    friends: {
        profiles: [
            {
                name: 'Bobby J', 
                network: {
                    socialProfile: 'LinkedIn'
                }
            }, 
            {
                name: 'Jack Bogle', 
                network: {
                    socialProfile: 'Facebook'
                }
            }, 
            {
                name: 'Mary Smith', 
                network: {
                    socialProfile: 'Meta'
                }
            }
        ]
    }
}

const {
    friends: {
        profiles
    }
} = profile

console.log(profiles[0].network.socialProfile)
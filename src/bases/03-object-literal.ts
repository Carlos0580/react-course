

const ironman = {
    age: 45,
    firstName: 'Tony',
    lastName: 'Stark',
    address: {
        postalCode: 'ABCD8', 
        city: ' New York'
    }
}




const spiderman = structuredClone( ironman )
spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 25
spiderman.address.city = 'San Jose'

console.log( ironman, spiderman )
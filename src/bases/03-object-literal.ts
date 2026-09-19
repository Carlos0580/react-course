
interface Person {
 age: number;
 firstName: string;
 lastName: string;
 address: Address
}

interface Address {
    postalCode: string;
    city: string
}


const ironman: Person = {
    age: 45,
    firstName: 'Tony',
    lastName: 'Stark',
    address: {
        postalCode: 'ABCD8', 
        city: ' New York'
    }
}




const spiderman: Person = structuredClone( ironman )
spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 25
spiderman.address.city = 'San Jose'

console.log( ironman, spiderman )
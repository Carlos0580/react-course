


const person = {
    name: 'Goku',
    age: 57,
    // raza: 'Sayajin',
    key: 'Kakaroto'
};

const { age, name, key } = person;

console.log( age, name, key);


interface Hero {
    name: string;
    age: number;
    key: string,
    rank?: string | undefined;

}

const useContext = ({ key, name, age, rank = 'sin rango'}: Hero ) =>{
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

const { rank, keyName } = useContext(person);

console.log({ rank, keyName })




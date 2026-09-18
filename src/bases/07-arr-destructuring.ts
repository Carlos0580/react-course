


const characterNames: string[] = [ 'Goku', 'Vegeta', 'Trunks' ];


const [ , , p3 ] = characterNames;

console.log({ p3 });


const returnArrayFn = () => {
    return [ 'ABC', 123 ] as const

};

const [ letters, number ] = returnArrayFn()
console.log( number, letters);





// const [name, setName] = useState('Gogeta');
// console.log(name);        Gogeta
// setName('Vejito');       Imprime "Vejito"

// const useState = () => {
//      return [ 'Gogeta',  () =>  ( 'Vejito' ) ]  as const
    
// }
// const [ letters2, setName2 ] = useState()
//  console.log( letters2, setName2);

const useState = (value: string) => {
    return[
        value,
        ( newValue: string) =>{
            console.log( newValue );
        }
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
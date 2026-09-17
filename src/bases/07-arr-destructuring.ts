


const characterNames: string[] = [ 'Goku', 'Vegeta', 'Trunks' ];


const [ , , p3 ] = characterNames;

console.log({ p3 });


const returnArrayFn = () => {
    return [ 'ABC', 123 ] as const

};


const [ letters, number ] = returnArrayFn()

console.log( number + 100);


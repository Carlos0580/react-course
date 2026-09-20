

function greet( name: string ): string {
    return `Hola ${ name }`;
}

const greet2 = ( name: string ): string => {
     return `Hola ${ name }`;
}

const msg = greet( 'Goku' );
const msg2 = greet( 'Vegeta' );
console.log({ msg, msg2 });


function getUser(){
   return{
     uId: 'ABC-123',
    username: 'El_papi23'   

   }
}

interface User {
    uId: string
    username: string  
}

const getUser2 = (): User => ({
    
    uId: 'ABC-123',
    username: 'El_papi23'  
    
})

const user = getUser();
const user2 = getUser2();

console.log( user, user2 );
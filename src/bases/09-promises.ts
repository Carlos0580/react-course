
const myPromise = new Promise< number >( ( resolve, reject ) =>{
    setTimeout(() =>{
        //! Yo quiero mi money!!
        // resolve( 100 )
        reject( 'mi amigo se perdio y no pago')
    
    }, 2000); // Segundos!!
});

myPromise.then((myMoney) =>{
    console.log(' Tengo mi dinero ')
})
.catch( reason  =>{
    console.warn( reason)
})
 .finally(() =>{
    console.log(' Pues a seguir con mi vida ')
})














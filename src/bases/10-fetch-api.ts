import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'zrEDOiZBO9XzFlGHK1lLWPHmKQbSvklP';


const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ API_KEY}`);


const createimgDom = ( url: string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;
    document.body.append( imgElement) ;
    console.log( imgElement);

}

myRequest
    .then(( res ) => res.json())
    .then(( {data}: GiphyRandomResponse ) =>{
        const imageUrl = data.images.original.url;        
        createimgDom( imageUrl);    
    })
    .catch((err) =>{
        console.error( err );
    })


















// myRequest.then(( res ) => {
//     console.log( {res} )
// })
// .catch( err =>{
//     console.error( Error );
// })
//  .finally(() =>{
//     console.log(' Pues a seguir con mi vida ')
// })





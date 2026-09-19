import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'zrEDOiZBO9XzFlGHK1lLWPHmKQbSvklP';





const createimgDom = ( url: string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;
    document.body.append( imgElement) ;
    console.log( imgElement);
}

const getRandomGifUrl = async (): Promise< string > => {    
    
    const res = await fetch(
        `https://api.giphy.com/v1/stickers/random?api_key=${ API_KEY}`
    );

    const { data }: GiphyRandomResponse = await res.json();

    return data.images.original.url;
}

getRandomGifUrl().then( createimgDom )



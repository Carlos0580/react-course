import { heroes, type Hero, Owner } from "../data/heroes.data";


const getHeroById = ( id: number ): Hero| undefined => {
    const hero = heroes.find(( hero ) => {
        return hero.id === id;
    })


return hero;
}

// console.log( getHeroById(6))


export const getHeroesByOwner = ( owner: Owner ) =>{
    const getHeroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )
    return heroes;
}


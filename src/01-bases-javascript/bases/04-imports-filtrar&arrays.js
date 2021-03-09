import { heroes } from "../data/heroes";

const finditem = (id) => heroes.find((item) => item.id === id);
// console.log(finditem(2))

const getHeroesByOwner = (owner) => heroes.filter((item) => item.owner === owner);
// console.log(getHeroesByOwner('DC'))

export {
    finditem,
    getHeroesByOwner as default
}



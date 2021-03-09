import { finditem } from "./bases/04-imports-filtrar&arrays"

// const promesa = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   resolve();
//   // }, 2000)
//   const heroes = getHeroesByOwner('DC');
//   resolve(heroes);
//   // reject("no se puede regresar informacion")
// });

// promesa
//   .then((response) => console.log('response', response))
//   .catch(err => console.warn(err))

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroes = finditem(id);
      heroes ? resolve(heroes) : reject('No trae nada')

    }, 2000)

  });
}

getHeroesByIdAsync(2)
  .then(response => console.log(response))
  .catch(err => console.log(err));
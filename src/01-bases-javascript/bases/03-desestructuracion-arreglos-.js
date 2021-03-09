const personajes = ['goku', 'vegueta', 'trunks']

const [p1] = personajes;
const [, , p3] = personajes;

console.log(p1, p3)


const regresaArray = () => {
  return ["ABC", 123]
}

const [letras, numero] = regresaArray();
console.log(letras, numero)

const useState = (valor) => {
  return [
    valor, () => {
      console.log(`hola mundo`)
    }
  ];
}


const [valor, setnombre] = useState('goku');

console.log(valor)
setnombre('diego') //mamamos la funcion que esta en usestate
//
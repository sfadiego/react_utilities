
const saludar =  function (nombre){
   return `hola soy ${nombre}`
}

const saludar2 =   (nombre) =>{
  return `hola soy ${nombre}`
}

const saludar3 = nombre => `hola soy ${nombre}`

const objeto = () => (
  {
    uuid: 123,
    nombre:'diego armando'
  }
);

const ejemplo =() =>({
  id:1, nombre:'diego'
});

console.log(saludar('Diego'))
console.log(saludar2('Diego2'))
console.log(saludar3('Diego3'))
console.table('console table',objeto())
console.table(ejemplo())
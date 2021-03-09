// desestructuracion
const persona = {
  id: 1,
  nombre: 'Diego armando',
  clave: 'ironman',
  edad: 12
}

const { id, nombre, clave } = persona;

const retornapersona = ({ id, nombre, clave, edad }) => {
  console.table(id, nombre, clave);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      latitud: 1212345,
      longitud: -1212345,
    }
  }
}

console.table(id, nombre, clave);

//desestructuracion y return de objeto
const { nombreClave, anios, latlng: { latitud, longitud } } = retornapersona(persona);

console.log(nombreClave, anios, latitud, longitud)
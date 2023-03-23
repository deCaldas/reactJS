/**
 * Este archivo es un componente de React que renderiza un formulario de registro.
 * @module App
 **/

import Register from './Register';

/**
 * El componente App es un componente de nivel superior que renderiza la aplicación completa.
 * @function
 * @returns {JSX.Element} - El elemento principal de la aplicación.
 **/

function App() {
  return (
    <main className="App">
      <Register />
    </main>
  );
}

export default App;

/**
*Comentarios:

** La primera línea del comentario es una descripción general del archivo y el módulo que exporta.
** El segundo comentario describe el propósito y la funcionalidad del componente App.
** El comentario en la línea 8 explica que el componente importa el componente Register de un archivo local.
** La función App está documentada con un comentario que describe su propósito, lo que devuelve y el tipo de datos que devuelve.
** El cuerpo de la función App es simple y no requiere documentación adicional.
** El componente se exporta como un módulo para ser utilizado en otros archivos.
 **/
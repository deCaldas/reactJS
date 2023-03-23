import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Renderizamos nuestra aplicación dentro del nodo HTML con el ID "root"
ReactDOM.render(
  // Habilitamos el "modo estricto" de React para detectar problemas potenciales
  // en la aplicación y mostrar advertencias.
  <React.StrictMode>
    <App />  
  </React.StrictMode>, 
  document.getElementById('root')  // Especificamos el nodo HTML en el cual se renderizará la aplicación
);

/* 
*Esta es una breve explicación de lo que hace este código:

** Importamos la biblioteca de React desde el módulo react.
** Importamos la biblioteca de ReactDOM desde el módulo react-dom.
** Importamos el archivo CSS de estilo para nuestra aplicación.
** Importamos el componente de la aplicación principal desde el archivo App.js.
** Llamamos al método ReactDOM.render() para renderizar nuestra aplicación en el nodo HTML con el ID root.
** Habilitamos el "modo estricto" de React para detectar problemas potenciales en la aplicación y mostrar advertencias.
** Renderizamos el componente principal de la aplicación dentro del modo estricto de React.
** <App /> Especificamos el nodo HTML en el cual se renderizará la aplicación.
 **/
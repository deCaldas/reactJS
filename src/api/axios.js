/**
 * Crea una instancia de Axios con una base URL predefinida.
 * @module axiosInstance
 * @see {@link https://github.com/axios/axios} para más información sobre Axios.
 * @returns {AxiosInstance} Instancia de Axios configurada con una base URL predefinida.
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3500'
});

export default instance;

/** 
* Importamos la biblioteca axios directamente desde el módulo de node axios.
*
* Luego, creamos una instancia de axios con la URL base configurada en http://localhost:3500, y la almacenamos en una constante llamada instance. Finalmente, exportamos esta constante como el valor predeterminado del módulo.
*
* Utiliza las funciones predeterminadas de axios para crear la instancia, lo que facilita la actualización del código en el futuro si se cambia la biblioteca o la configuración de la instancia. 
**/
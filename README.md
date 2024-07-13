# Junior Developers Technical interview

## Enunciado 

Crea una aplicación para buscar películas

## API a usar (Recomiendo guardarla en las variables de entorno de github)
- <https://www.omdbapi.com/> 
- API_KEY: Obtenerla

## ⚠️⚠️⚠️⚠️⚠️⚠️ MODO DEVELOPER

`Creamos un fichero .env que se añadirá a .gitignore`

`.env`

```
VITE_API_KEY=your-apikey
VITE_API_URL=https://www.omdbapi.com/
```

Uso:

```js
console.log(import.meta.env.VITE_API_KEY);
console.log(import.meta.env.VITE_API_URL);
```

## Requerimientos

- [] Necesita mostrar un input para buscar la película y un botón para buscar.
- [] Lista las películas encontradas y muestra el título, año y poster.
- [] Haz que las películas se muestren en un grid responsive.
- [] Mensaje de error si el campo `search` está vacío. Este mensaje no cargará al iniciar la app.
- [] Ordenar las películas mediante un check por título.

<details>
  <summary>
    Primera iteración
  </summary>
  <div>
  <ul>
    <li>Evitar que se haga la misma búsqueda dos veces seguidas.</li>
    <li>Haz que la búsqueda se haga automáticamente al escribir.</li>
    <li>Evita que se haga la búsqueda continuamente al escribir (debounce)</li>
  </ul>
  </div>
</details>



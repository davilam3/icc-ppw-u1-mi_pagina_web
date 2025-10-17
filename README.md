# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript
**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Diana Avila Macas
**Repositorio:**
**Página desplegada (GitHub Pages):** 

---


## 🧱 Estructura HTML utilizada
| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas
| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| figure | Contenedor para imagen con pie de foto | Imagen de un Paseo con `<figcaption>` |
| aside | Muestra información complementaria y enlaces relacionados al contenido principal | Lista enumerada y enlace a mi cuenta de Instagram|

**Código usado:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
        rel="stylesheet"
        href="style.css"
    >
</head>
<body>
    <header>
        <h1 id="titulo">MI PAGINA WEB</h1>
        <h2>Grupo 2 - UPS</h2>
        <p>Bienvenido a mi Primera Pagina Web</p>
    </header>
    
    <section class="card">
        <h2>Tabla de Elementos HTML </h2>
        <table>
            <thead>
                <tr>
                    <th>Elemento</th>
                    <th>Descripción</th>           
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Figure</td>
                    <td>Se usa para mostrar imágenes o gráficos</td>
                </tr>
                <tr>
                    <td>Aside</td>
                    <td>Se usa para mostrar información complementaria o un dato adicional al contenido principal</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="card">
        <h2>Etiquetas Nuevas</h2>
        <article>
            <h4>---Ejemplos con "Figure"---</h4>
            <div class="galeria">
                <figure>
                    <img src="pescar.jpg" alt="imagen de pescar" width="200">
                    <figcaption>Pescando</figcaption>
                </figure>
                <figure>
                    <img src="cajas.jpg" alt="imagen del cajas" width="190">
                    <figcaption>Paseo</figcaption>
                </figure>
            </div>
            
        </article>
    </section >
    
    <section class="card">
        <aside>
            <h4>---Datos Adicionales con "Aside"---</h4>
            <ol>
                <li>Me gusta tomar fotos de momentos especiales</li>
                <li>Me gusta conocer nuevos lugares</li>
                <li>Me gusta pasar tiempo con mis personas favoritas</li>
            </ol>

            <h4>Red Social</h4>
            <ul>
                <li><a href="https://www.instagram.com/d_avila_m?igsh=MWRyOW5ycTI3N3prMw%3D%3D&utm_source=qr">d_avila_m</a></li>
            </ul>
        </aside>
    </section>
  
    <footer>
        <div id="caja">CLICK AQUÍ</div>
        <p><strong>Autor:</strong> Diana Avila</p>
        <p><strong>Asignatura:</strong> Programación y Plataformas Web</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>
```


---


  #  Práctica 2 – Adición de CSS y JavaScript
  ---

  ### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
│
├── cajas.jpg
├── index.html
├── pescar.jpg
├── script.js
├── style.css
└── README.md
```

---

### 2. Implementación en HTML
Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**
```
<link
        rel="stylesheet"
        href="style.css"
    >
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```
<script src="script.js"></script>
```

---


### 3. Estilos aplicados con CSS
| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      | background-color: #fdf6f0; color: #222; line-height: 1.6; padding: 20px;        |Aplica un fondo color crema, texto oscuro y espaciado general para todo el contenido.         |
| `header`                    | background-color: #ecc3ec; color: #fff; text-align: center; padding: 30px; border-top/bottom y bordes redondeados.|Da color de fondo rosado-lila al encabezado, centra el texto y añade bordes decorativos arriba y abajo.
| `table`                     |width: 100%; border-collapse: collapse; th, td con bordes, fondo blanco y padding.                              |Define el formato de la tabla, bordes suaves, espacio entre celdas y colores para una lectura clara.                  |
| `figure`                    |text-align: center; margin-top: 15px;
figure img { border-radius: 10px; margin: 8px; }                                   |Centra las imágenes, agrega espacio y redondea las esquinas   |
| `section`                   |.card { background-color: #fff; border-radius: 10px; padding: 25px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); }                                        |Crea tarjetas con fondo blanco, bordes redondeados y sombra para separar visualmente cada sección.          |
| `aside`                  |background-color: #f8f2ff; border-left: 6px solid #ca9dc8; border-radius: 6px; padding: 15px 20px;                        | Muestra información adicional en un recuadro con borde lateral decorativo. |
  
**Ejemplo en el código:**

```css
figure {
  text-align: center; 
  margin-top: 15px; 
}

aside {
  background-color: #f8f2ff;
  border-left: 6px solid #ca9dc8; 
  padding: 15px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
}
```

---

###  4. Interactividad agregada con JavaScript
El archivo `script.js` incorpora dos acciones básicas:

1. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "orange";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "white";
   });
   ```
2. **Cambio de texto al hacer clic en la caja del footer**

   ```javascript
   const caja = document.getElementById("caja");

   caja.addEventListener("click", () => {
   if (caja.textContent === "CLICK AQUÍ") {
   caja.textContent = "💖 GRACIAS POR VISITAR MI PÁGINA 💖";
   } else {
    caja.textContent = "CLICK AQUÍ";
   }
   });
   ```
   
## Capturas de pantalla del proyecto final
* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)


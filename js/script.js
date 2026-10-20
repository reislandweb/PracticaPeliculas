// ------ FASE 1 --------

//Capturar el formulario

const form = document.getElementById("peliculasForm");
// const nombre = document.getElementById("nombre");
const año = document.getElementById("año");
// const urlImg = document.getElementById("urlImg");
// const filtroGenero = document.getElementById("filtroGenero");
// const descripcion = document.getElementById("descripcion");
 const alertMsg = document.getElementById("alertMsg");

let listaPeliculas = [];

form.addEventListener("submit", (event) => {
    event.preventDefault(); //Evitamos que se recargue el formulario
    
    const regexAño = /^(1[8-9]\d{2}|[2-9]\d{3,})$/;

      if(!regexAño.test(año.value)) {
        alertMsg.innerText = "Error: El año debe ser mínimo 1800 y tener al menos 4 dígitos."
        alertMsg.style.color = "red";
        console.error("Algo salio mal");
        return;
      }else {
        console.log("¡Año válido!");
        alertMsg.innerText = "";
      }
      const data = new FormData(form);
      const nuevaPelicula = Object.fromEntries(data.entries());
      
      listaPeliculas.push(nuevaPelicula);
      renderFilms(listaPeliculas);
      form.reset();
});

function renderFilms(filmList){
    const containerRender = document.getElementById("containerRender");
    containerRender.innerHTML = ""; // Limpiamos contenedor para no duplicar pelis que ya esten en el arr
    filmList.forEach((filmsItems, index) => {
        const article = document.createElement("article");
        article.innerHTML = `
                    <div class = "filmsRender">
                        <h2>${filmsItems.name}</h2>
                        <img src="${filmsItems.urlImg}" alt="${filmsItems.Nombre}">
                        <p>${filmsItems.genero}</p>
                        <p>${filmsItems.año}</p>
                        <p>${filmsItems.Descripcion}</p>
                        <button class="deleteBtn">Delete</button>
                        <button class="editBtn">Edit</button>
                    </div>
                `;
        
                //Borrar pelicula
        const deleteButton = article.querySelector(".deleteBtn");
        deleteButton.addEventListener("click", () => {
            listaPeliculas.splice(index, 1);
            article.remove();
        });

        const editBtn = article.querySelector(".editBtn");
        editBtn.addEventListener("click", () =>{
            article.innerHTML = `
            <form class="editForm">
                <label>Name: <input type="text" name="name" value="${filmsItems.name}" required></label>
                <label>Age: <input type="number" name="año" value="${filmsItems.año}" required></label>
                <label>urlImg: <input type="url" name="urlImg" value="${filmsItems.urlImg}" required></label>
                <label>Genero: <input  name="genero" value="${filmsItems.genero}" required></label>
                <label>Descripción: <input  name="Descripcion" value="${filmsItems.Descripcion}" required></label>
                <button type="submit">Save</button>
            </form>`

            const editForm = article.querySelector(".editForm");
            editForm.addEventListener("submit", (event) => {
                event.preventDefault();

                filmsItems.name = editForm.elements.name.value.trim();
                filmsItems.año = parseInt(editForm.elements.año.value.trim());
                filmsItems.urlImg = editForm.elements.urlImg.value.trim();
                filmsItems.genero = editForm.elements.genero.value.trim();
                filmsItems.Descripcion = editForm.elements.Descripcion.value.trim();

                renderFilms(filmList);
            })
        })
        
    containerRender.appendChild(article);
    });
}

// ------FASE 2 ----------

//FILTRADO DE PELICULAS

function filterFilms() {
    
    const textoBuscado = document.getElementById("filtroNombre").value.toLowerCase();

    const resultFilter = listaPeliculas.filter((films) => 
        films.name.toLowerCase().includes(textoBuscado)
    );
    renderFilms(resultFilter);
}
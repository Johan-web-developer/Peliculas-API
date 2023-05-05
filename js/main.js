const input = document.querySelector('#searchBar');
input.addEventListener('change', listas);

function listas(){
    const input2 = document.querySelector('#searchBar');
    fetch(` http://www.omdbapi.com/?s=${input2.value}&page=1&apikey=6e90f515`)
    .then(respuesta=>{
        console.log(respuesta);
        return respuesta.json()
    })
    .then(datos=>{
        console.log(datos.Search);
        showHTML(datos.Search)
    })
}

function showHTML(datos){
    limpiar();
    datos.forEach(pelicula=>{
        const {Title, Year, Poster}=pelicula
        const card = document.createElement('div')
        card.classList.add(`estilo`)
        card.innerHTML=`
        <div class="card">
        <img src="${Poster}"
        <p class="titulo" >${Title}</p>
        <p class="año" >${Year}</p>
        <button>Movie</button>
        </div>
        `
        document.querySelector('#container').appendChild(card)
    });
}



function limpiar() {
    const cards = document.querySelectorAll('.estilo');
    cards.forEach(card => card.remove());
  }


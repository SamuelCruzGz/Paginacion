let pokemonsList = document.getElementById("pokemons-list");
let links = document.getElementById("links");



function updatePokemons(url) {
  if (url) {

    
    pokemonsList.innerHTML = "";
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        
        for (let i of res.results) {

          
              pokemonsList.innerHTML += `<div class="card">
                                                  
                                                  <p>${i.title}</p>
                                              </div>`;
            
        };
        
        links.innerHTML = (res.previous) ? `<button onclick="updatePokemons('${res.previous}')">Atrás</button>` : "";
        
        links.innerHTML += (res.next) ? `<button onclick="updatePokemons('${res.next}')">Siguiente</button>` : "";

      });
  }

}

updatePokemons("https:/api.mercadolibre.com/sites/MLM/search?q=iphone");
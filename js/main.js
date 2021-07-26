const container = document.getElementById('container');

let i = Math.random()*20;
axios("https://rickandmortyapi.com/api/character",
      {method: "get", })    
    .then(response => response.data.results)
    .then(response => response[Math.round(i)]) 
    .then(response =>  
    container.innerHTML = 
    '<img src="'+response.image+'" alt="" id="imagen">'
    +'<div class="desc"><h1 clas="texto" id="nombre">'+response.name+'</h1>'
    +'<h2 clas="texto" id="status">Status: '+response.status+'</h2>'
    +'<p clas="texto" id="especie">Especie: '+response.species+'</p>'
    +'<p clas="texto" id="origen">Origen: '+response.origin['name']+'</p>'
    +'<p clas="texto" id="sexo">Sexo: '+response.gender+'</p></div>'
)

   
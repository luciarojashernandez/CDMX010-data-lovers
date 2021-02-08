
import { filterByGender } from './data.js';
import { filterByStatus } from './data.js';
import { filterBySpecies } from './data.js';

//show home screen
 document.getElementById("filter").style.display = "block";
 document.getElementById("customResult").style.display = "none";

 //"fetch" to fetch the data
const URL = "./data/rickandmorty/rickandmorty.json";
async function getData(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log('data', data)
  filterByCategory(data.results);
}
getData(URL);

//filter data
function filterByCategory (data) {
  let filtros = document.querySelectorAll('.filtros');

  filtros.forEach(filtro => {
    filtro.addEventListener("click", function(event){
      //event.preventDefault();
      // console.log('click');
      // console.log(event);
      // console.log('event.target.id', event.target.id);
      // console.log('event parent', event.target.parentElement.id);

      let target;
      if(event.target.parentElement.id === 'gender'){
        console.log('gender si');
        //target = data.filter(personaje => personaje.gender === event.target.id)
        target = filterByGender(data, event.target.id)
      }
 
      if(event.target.parentElement.id === 'species'){
        console.log('species si');
        // target = data.filter(personaje => personaje.species === event.target.id)
        target = filterBySpecies(data, event.target.id)
      }
      if(event.target.parentElement.id === 'status'){
        console.log('status si');
        //target = data.filter(personaje => personaje.status === event.target.id)
        target = filterByStatus(data, event.target.id)
        console.log(target);
      }

      console.log('target',target);
      imprimirData(target);
      showSection();
      orderTarget(target);
      // showSection(event.target.id);
    })
  });      
}
 
// show filtered characters
function showSection(){
  document.getElementById("customResult").style.display = "block";
  document.getElementById("filter").style.display = "none";
}
//show the data on the cards
let tarjetas = document.getElementById("tarjetas").innerHTML;
let resultado = document.getElementById('resultado');
const imprimirData = (datos) => {
  resultado.innerHTML = '';
    datos.forEach((element)=>{
        tarjetas= `
        <article class="card">
        <div class="card-encabezado">
          <img src="${element.image}"/>
        <div>
        <div class="card-contenido">
          <h3 class="card-tittle">${element.name}</h3>
          <p class="info-personal desplazar">Gender: ${element.gender}</p>
          <p class="info-personal desplazar">Status: ${element.status}</p>
          <p class="info-personal desplazar">Specie: ${element.species}</p>
          <p class="info-personal desplazar">Origin: ${element.origin.name}</p>
        </div>
        </article>
        `; 
      resultado.insertAdjacentHTML("beforeend", tarjetas);
    });
  };

  //go back to home screen
  let home = document.getElementById("goHome");
  home.addEventListener("click",returnHome);
  function returnHome() {
    document.getElementById("customResult").style.display = "none";
    document.getElementById("filter").style.display = "block";
    location.reload();
  }


  //order characters
  function orderTarget(datos){
    let orderAZ = document.getElementById("orderA");
    let orderZA = document.getElementById("orderZ");
    let orderResult;
  // console.log(typeof datos);
    if (orderAZ.addEventListener("click", function(){
      orderResult = datos.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      console.log("click", orderResult);
      imprimirData(orderResult);
    }));
    else if(orderZA.addEventListener("click", function(){
      orderResult.reverse();
      console.log("click", orderResult);
      imprimirData(orderResult);
    }));  
  }




  
  // else if(orderZA.addEventListener("click", function(){
  //   orderResult = datos.sort(function (a,b) {
  //     if (b.name > a.name){
  //       return 1;
  //     }
  //     if (b.name < a.name){
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   console.log("click", orderResult);
  //   imprimirData(orderResult);
  // }));   



    
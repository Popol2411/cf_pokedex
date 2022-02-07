let pokemonRepository = (function () { // function is anonymous since no parameter is given to it

let pokemonList = []; // own array deleted and replaced by empty array since pokemons will be loaded via api
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //api with the source of the pokemons

  function add(pokemon) { // "add" function adds pokemon to the "pokemonList" via the "push" function
    pokemonList.push(pokemon);
  }

  function getAll() { // function "getAll" that returns all the data from the "pokemonList"
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group"); // "pokemon-list" class from html (ul) is chosen via "let pokemonList"
    let listpokemon = document.createElement("li"); // list created via createElement
    let button = document.createElement("button"); // button created
    button.innerText = pokemon.name; // button text/description is the "name" of the pokemon
    button.classList.add("btn-primary"); // css "my_button" is replaced by the Bootstrap 'btn-primary' class
    listpokemon.classList.add('group-list-item'); // 'group-list-item' Bootstrap as a class added to the listpokemon
    listpokemon.appendChild(button); // button is added to the item list
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) { // "Event" added to the "click" of the button
    console.log(event)  // "event" is logged -> "pointer" (the click itself)
    console.log(pokemon) // the pokemon including his properties is shown
    showDetails(pokemon) // same as above, but "showDetails" also contains the text "showDetails function says hello"
  });
}

function loadList() {   // loadList function
    return fetch(apiUrl).then(function (response) { // returns the data fetched from apiURL link on top of the script. If the promise takes place...
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) { // ...then for each "item" from the "pokemon" variable the name and detailsUrl are beeing displayed
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon); // the pokemon is added
        console.log(pokemon); // the pokemon is also logged in the console for check
      });
    }).catch(function (e) { // if the promise fails, function "e" takes place
      console.error(e);
    })
  }

  function loadDetails(item) { // loadDetails function
    let url = item.detailsUrl; // the "url" variable corresponds to the "item.detailsUrl" data fetched
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {  // if the promise takes place, following details will be fetched
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      item.abilities = [];
        for (let i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
    }).catch(function (e) { // otherwise the error will be displayed in the console
      console.error(e);
    });}

    function showDetails(item) {
      loadDetails(item).then(function () { // details loaded into console
      showModal(item);
    })
  }

  function showModal(item) { // showModal function
      let modalTitle = $(".modal-title"); // modalTitle
      let modalBody = $(".modal-body"); // modalBody
      // let modalHeader = $(".modal-header"); // no header so removed

      modalTitle.empty(); // clears the modalTitle after display
      modalBody.empty();  // clears the modalBody after display

      let pokemonName = $("<h2>" + item.name + "</h2>");

      let pokemonHeight = $("<p>" + "Height: " + item.height + "</p>");

      let pokemonWeight = $("<p>" + "Weight: " + item.weight + "</p>");

      let pokemonAbilities = $("<p>" +"Abilities: " + item.abilities + "</p>");

      let pokemonImage = $("<img class='pokemon-modal-image'>");
      pokemonImage.attr ("src", item.imageUrl); // pokemon image attribute loaded from 'item.imageUrl'

      modalTitle.append(pokemonName); // pokemonName is displayed as the title in the modal
      modalBody.append(pokemonImage); // pokemonImage is displayed in the body of the modal
      modalBody.append(pokemonHeight); // pokemonHeight is displayed in the body of the modal
      modalBody.append(pokemonWeight); // pokemonWeight is displayed in the body of the modal
      modalBody.append(pokemonAbilities); // pokemonDetails are displayed in the body of the modal
}

  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  };

  })();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
  });
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".group-list-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

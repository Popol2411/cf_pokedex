let pokemonRepository = (function () { //function is anonymous since no parameter is given to it

let pokemonList = []; //own array deleted and replaced by empty array since pokemons will be loaded via api
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //api with the source of the pokemons

  function add(pokemon) { // "add" function adds pokemon to the "pokemonList" via the "push" function
    pokemonList.push(pokemon);
  }

  function getAll() { // function "getAll" that returns all the data from the "pokemonList"
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list"); // "pokemon-list" class from html (ul) is chosen via "let pokemonList"
    let listpokemon = document.createElement("li"); // list created via createElement
    let button = document.createElement("button"); // button created
    button.innerText = pokemon.name; // button text/description is the "name" of the pokemon
    button.classList.add("my_button"); // css "my_button" taken into account
    listpokemon.appendChild(button); // button is added to the item list
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) { // "Event" added to the "click" of the button
    console.log(event)  // "event" is logged -> "pointer" (the click itself)
    console.log(pokemon) // the pokemon including his properties is shown
    showDetails(pokemon) // same as above, but "showDetails" also contains the text "showDetails function says hello"
  });
}

function loadList() {   //loadList function
    return fetch(apiUrl).then(function (response) { //returns the data fetched from apiURL link on top of the script. If the promise takes place...
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) { // ...then for each "item" from the "pokemon" variable the name and detailsUrl are beeing displayed
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon); //the pokemon is added
        console.log(pokemon); //the pokemon is also logged in the console for check
      });
    }).catch(function (e) { //if the promise fails, function "e" takes place
      console.error(e);
    })
  }

  function loadDetails(item) { //loadDetails function
    let url = item.detailsUrl; //the "url" variable corresponds to the "item.detailsUrl" data fetched
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {  //if the promise takes place, following details will be fetched
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) { //otherwise the error will be displayed in the console
      console.error(e);
    });}

    function showDetails(item) {
      loadDetails(item).then(function () { //details loaded into console
      showModal(item);
    })
  }

  function showModal(item) { //showModal function
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = ''; //empty modal container
      let modal = document.createElement('div'); // creates a div
      modal.classList.add('modal'); // div class 'modal'
      let closeButtonElement = document.createElement('button'); // creates a button
      closeButtonElement.classList.add('modal-close'); // button class 'modal-close'
      closeButtonElement.innerText = 'Close'; // button texted 'Close'
      closeButtonElement.addEventListener('click', hideModal); // modal closes on click

      let pokemonName = document.createElement('h1');  //creates a 'h1' with text 'title'
      pokemonName.innerText = 'Pokemon ' + item.name;

      let pokemonHeight = document.createElement('p'); //creates a 'p' with text 'text'
      pokemonHeight.innerText = 'This Pokemon is ' + item.height + ' inches tall';

      let pokemonImage = document.createElement('img');
      pokemonImage.classList.add('pokemon-modal-image');
      pokemonImage.src = item.imageUrl;

      modal.appendChild(closeButtonElement); //add "closeButtonElement" to the modal
      modal.appendChild(pokemonName); //adds Pokemon name to the modal
      modal.appendChild(pokemonHeight); //adds Pokemon Height to the modal
      modal.appendChild(pokemonImage); // adds Image to the modal
      modalContainer.appendChild(modal); //adds modal to the modal container
      modalContainer.classList.add('is-visible'); // class "is-visible"
}

      document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!'); // on click, the modal is shown
});

  function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal(); //when Escape key is pressed while the modal is visible, it changes it states to 'hide modal'
  }
});

  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  };

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
  });
});

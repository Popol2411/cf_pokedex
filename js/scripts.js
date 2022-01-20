let pokemonRepository = (function () { //function is anonymous since no parameter is given to it

let pokemonList = [ //Array named "pokemonList" with the properties of 3 pokemons
  {
      name: "Butterfree",
      height: 1.1,
      types: ["flying", "bug"]
  },
  {
      name: "Arbok",
      height: 3.5,
      types: ["dark", "poison"]
  },
  {
      name: "Parasect",
      height: 0.8,
      types: ["grass", "bug"]
  }
];

  function add(pokemon) { // "add" function adds pokemon to the "pokemonList" via the "push" function
    pokemonList.push(pokemon);
  }

  function getAll() { // function "getAll" that returns all the data from the "pokemonList"
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list"); // "pokemon-list" class from html (ul) is chosen via "let pokemonList"
    let listItem = document.createElement("li"); // list created via createElement
    let button = document.createElement("button"); // button created
    button.innerText = pokemon.name; // button text/description is the "name" of the pokemon
    button.classList.add("my_button"); // css "my_button" taken into account
    listItem.appendChild(button); // button is added to the item list
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function (event) { // "Event" added to the "click" of the button
    console.log(event)  // "event" is logged -> "pointer" (the click itself)
    console.log(pokemon) // the pokemon including his properties is shown
    showDetails(pokemon) // same as above, but "showDetails" also contains the text "showDetails function says hello"
  })
};

  function showDetails(pokemon) {
    console.log('showDetails function says hello', pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: "0.5", types: ["yellow", "thunder"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);

});

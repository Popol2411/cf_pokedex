let pokemonRepository = (function () {

let pokemonList = [
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

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my_button");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function showDetails(pokemon) {
    console.log(pokemon);
});
  }

  function showDetails(pokemon) {
  console.log(pokemon);
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
pokemonRepository.showDetails(pokemon);

});

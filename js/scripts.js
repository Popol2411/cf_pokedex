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

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: "0.5", types: ["yellow", "thunder"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon)
  {
    if (pokemon.height >1.0)
    {
    document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big!" + "<br><br>");
  }
    else
    {
    document.write(pokemon.name + " (height: " + pokemon.height + ")" + "<br><br>");
  }
});

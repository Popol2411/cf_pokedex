let pokemonList = [
    {name: "Butterfree", height: 1.1, types: ["flying", "bug"] },
    {name: "Arbok", height: 3.5, types: ["dark", "poison"] },
    {name: "Parasect", height: 1, types: ["grass", "bug"] }
  ];
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ");
}

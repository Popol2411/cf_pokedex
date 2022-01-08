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

for (let i = 0; i < pokemonList.length; i++){
if (pokemonList[i].height >1.0) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that´s big!" + "<br><br>");
}
else {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br><br>");
}
}

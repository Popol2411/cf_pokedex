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

pokemonList.forEach(log);

  function log(item)
  {
    if (item.height >1.0)
    {
    document.write(item.name + " (height: " + item.height + ") - Wow, that's big!" + "<br><br>");
  }
    else
    {
    document.write(item.name + " (height: " + item.height + ")" + "<br><br>");
  }
};
})();

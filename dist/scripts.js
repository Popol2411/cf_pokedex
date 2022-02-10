let pokemonRepository = (function() {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    t.push(e);
  }
  function i(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function(t) {
        return t.json();
      })
      .then(function(e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types),
          (t.weight = e.weight),
          (t.abilities = []);
        for (let n = 0; n < e.abilities.length; n++)
          t.abilities.push(e.abilities[n].ability.name);
      })
      .catch(function(t) {
        console.error(t);
      });
  }
  function o(t) {
    i(t).then(function() {
      !(function(t) {
        let e = $('.modal-title'),
          n = $('.modal-body'),
          i = $('<h2>' + t.name + '</h2>'),
          o = $('<p>Height: ' + t.height + '</p>'),
          l = $('<p>Weight: ' + t.weight + '</p>'),
          a = $('<p>Abilities: ' + t.abilities + '</p>'),
          s = $('<img class=\'pokemon-modal-image\'>');
        s.attr('src', t.imageUrl),
          e.empty(),
          n.empty(),
          e.append(i),
          n.append(s),
          n.append(o),
          n.append(l),
          n.append(a);
      })(t);
    });
  }
  return {
    add: n,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = document.querySelector('.list-group'),
        n = document.createElement('li'),
        i = document.createElement('button');
      (i.innerText = t.name),
        i.classList.add('btn-primary'),
        n.classList.add('group-list-item'),
        n.appendChild(i),
        e.appendChild(n),
        i.addEventListener('click', function(e) {
          o(t);
        });
    },
    loadList: function() {
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            let e = { name: t.name, detailsUrl: t.url };
            n(e), console.log(e);
          });
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    loadDetails: i,
    showDetails: o
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
}),
  $(document).ready(function() {
    $('#myInput').on('keyup', function() {
      const t = $(this)
        .const()
        .toLowerCase();
      $('.group-list-item').filter(function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(t) > -1
        );
      });
    });
  });

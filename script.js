async function loadPokedex() {
  const response = await fetch("pokedex_database.json");
  const data = await response.json();
  console.log("Objet JSON :", data);

  const pokedex = data.pokemonList;
  console.log("😈 Pokédex :", pokedex);

  // 1 - .length
  // ➡️ Calcule le nombre total de Pokémon dans le Pokedex.
  // La propriété length permet d'obtenir le nombre d'éléments dans un tableau.

  const totalPokemon = pokedex.length;
  console.log("Nombre total de Pokémon :", totalPokemon);

  // 2 - .map()
  // ➡️ Crée un nouveau tableau contenant uniquement les noms des Pokémon.
  // La méthode map() parcourt chaque élément du tableau et renvoie un nouveau tableau contenant le résultat de la fonction appliquée à chaque élément.

  const namePokemon = pokedex.map((pokemon) => pokemon.name);
  console.log("Nom des Pokémon :", namePokemon);

  // 3 - Math.random()
  // ➡️ Sélectionne un Pokémon aléatoire et affiche son nom.
  // Math.random() génère un nombre décimal aléatoire entre 0 et 1.
  // Math.floor() arrondit à l'entier inférieur pour obtenir un index valide dans le tableau.

  //const randomIndex = Math.floor(Math.random() * 152); (Non dynamique)
  const randomIndex = Math.floor(Math.random() * pokedex.length);
  const randomPokemon = pokedex[randomIndex];
  console.log("🎲 Pokémon aléatoire :", randomPokemon.name);

  // 4 - .filter()
  // ➡️ Récupère tous les Pokémon de type "Fire" et "Grass"
  // La méthode filter() crée un nouveau tableau avec les éléments qui passent le test défini dans la fonction callback. Elle retourne true pour inclure l'élément, false pour l'exclure.

  const firePokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Fire")
  );
  console.log("🔥 Tous les Pokémon type fire :", firePokemon);

  const grassPokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Grass")
  );
  console.log("🌿 Tous les Pokémon type grass :", grassPokemon);

  // 5 - .find()
  // ➡️ Récupère un Pokémon de type "Water"
  // La méthode find() retourne le premier élément du tableau qui satisfait la condition. Elle renvoie undefined si aucun élément ne correspond.

  //On utilise pokemon.type === "Water" si type est une string.
  //On utilise pokemon.type.includes("Water") si type est un tableau.
  const waterPokemon = pokedex.find((pokemon) =>
    pokemon.type.includes("Water")
  );
  console.log("🐟 Pokémon type water :", waterPokemon);

  // 6 - .sort()
  // ➡️ Trie les Pokémon par poids du plus léger au plus lourd.
  // La méthode sort() trie les éléments d'un tableau en place. Elle prend une fonction de comparaison qui détermine l’ordre de tri.

  // Ici on convertit les poids en nombre avec parseFloat pour comparer des valeurs numériques.
  const weightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  console.log("Pokémon du plus léger au plus lourd :", weightPokemon);

  // 7. .reduce()
  // ➡️ Calcule le poids total de tous les Pokémon.
  // La méthode reduce() parcourt le tableau et applique une fonction à un accumulateur et à chaque élément du tableau pour réduire le tableau à une seule valeur.

  const totalWeightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue.weight),
      0
    );
  console.log("Poids total de tous les Pokémon :", totalWeightPokemon);

  // 8 - .every()
  // ➡️ Vérifier si tous les Pokémon font plus de 10 Kg.
  // La méthode every() teste si tous les éléments du tableau passent le test implémenté par la fonction fournie. Retourne true si c’est le cas pour tous, sinon false.

  const allHaveMoreThan10kg = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .every((pokemon) => parseFloat(pokemon.weight) > 10);
  console.log("Tous les Pokémon ont-ils plus de 10 Kg ?", allHaveMoreThan10kg);

  // 9 - .some()
  // ➡️ Vérifier s'il y a un Pokémon de type "Dragon"
  // La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Retourne true dès qu’un élément valide la condition.

  const hasDragonType = pokedex.some((pokemon) =>
    pokemon.type.includes("Dragon")
  );
  console.log("🐉 Y a-t-il un Pokémon de type Dragon ?", hasDragonType);

  // 10 - .push()
  // ➡️ Ajoute un nouveau Pokémon à la fin de la liste.
  // La méthode push() modifie le tableau original en ajoutant un ou plusieurs éléments à la fin du tableau et renvoie la nouvelle longueur du tableau mais pas l'élément ajouté.

  pokedex.push({
    id: 152,
    name: "Tortank Gigamax",
    type: ["Water"],
  });
  console.log("Nouveau Pokédex :", pokedex);
  //index 151, car l'indexation commence à 0
  console.log("➕ Liste après ajout de Tortank Gigamax :", pokedex[151]);

  // 11 - .splice()
  // ➡️ Ajoute un nouveau Pokémon : "Charizard Gigamax"
  // La méthode splice() modifie le contenu d'un tableau en supprimant, remplaçant ou ajoutant des éléments à partir d'un index donné. Elle retourne un tableau contenant les éléments supprimés.

  pokedex.splice(151, 1, {
    id: 152,
    name: "Charizard Gigamax",
    type: ["Fire"],
  });
  console.log("Nouveau Pokédex :", pokedex);
  //index 151, car l'indexation commence à 0
  console.log("➕ Liste après ajout de Charizard Gigamax :", pokedex[151]);

  // 12 - .shift()
  // ➡️ Retire le premier Pokémon de la liste et affiche-le.
  // La méthode shift() retire le premier élément d'un tableau et le retourne. Elle modifie la longueur du tableau.

  const firstPokemon = pokedex.shift();
  console.log("Premier Pokémon de la liste :", firstPokemon);
  console.log("Nouveau Pokédex :", pokedex);

  // 13 - .pop()
  // ➡️ Retire le dernier Pokémon de la liste et affiche-le.
  // La méthode pop() retire le dernier élément d’un tableau et le retourne. Elle modifie la longueur du tableau.

  const lastPokemon = pokedex.pop();
  console.log("Dernier Pokémon de la liste :", lastPokemon);
  console.log("Nouveau Pokédex :", pokedex);

  // 14 - .forEach()
  // ➡️ Affiche une phrase avec le nom de chaque Pokémon de type "Grass"
  // La méthode forEach() exécute une fonction donnée une fois pour chaque élément du tableau.

  grassPokemon.forEach((pokemon) => {
    console.log(`Hello je suis ${pokemon.name}`);
  });

  // 15 - Boucle For
  // ➡️ Trouve le Pokémon le plus lourd.

  //La boucle for avec index est une structure de contrôle qui permet de parcourir un tableau ou exécuter des instructions un nombre précis de fois en utilisant un compteur (souvent appelé i) qui représente l’index courant dans le tableau.

  let heaviestPokemon1;
  let maxWeight1 = -Infinity;
  for (let i = 0; i < pokedex.length; i++) {
    const weightValue = parseFloat(pokedex[i].weight);
    if (weightValue > maxWeight1) {
      maxWeight1 = weightValue;
      heaviestPokemon1 = pokedex[i].name;
    }
  }
  console.log("⚖️ Pokemon le plus lourd :", heaviestPokemon1);

  // Même principe que la boucle for avec index mais avec for...of pour parcourir directement les éléments du tableau.

  let heaviestPokemon2;
  let maxWeight2 = -Infinity;
  for (const pokemon of pokedex) {
    const weightValue = parseFloat(pokemon.weight);
    if (weightValue > maxWeight2) {
      maxWeight2 = weightValue;
      heaviestPokemon2 = pokemon.name;
    }
  }
  console.log("Pokemon le plus lourd :", heaviestPokemon2);

  // Note : Ici on initialise une variable maxWeight à -Infinity et on parcourt chaque élément. Si le poids du Pokémon est supérieur à maxWeight, on met à jour maxWeight et le nom du Pokémon.
  // Si array est garanti d’avoir au moins un élément, alors initialiser avec array[0] est plus efficace mais si array peut être vide, alors la première approche (let heaviestPokemon;) est plus sécurisée.

}

loadPokedex();

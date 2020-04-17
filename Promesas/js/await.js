const superheroes = {
  capi: {
    nombre: "Capitán América",
    poder: "Aguantar inyecciones sin morir",
  },
  iron: {
    nombre: "IronMan",
    poder: "Absurda cantidad de dinero",
  },
  spider: {
    nombre: "Spiderman",
    poder: "La mejor reaccion alergica a las arañas",
  },
};

const heroesIds = ["capi", "iron", "spider"];

const buscarHeroeAsync = async (id) => {
  const heroe = superheroes[id];
  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe un heroe con el id ${id}`);
  }
};
console.log(heroesIds);

const obtenerHeroesArr = async () => {
  const heroesArr = [];
  for(const id of heroesIds) {
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe);
  }

//   setTimeout(() => {
//       console.table(heroesArr);
//   }, 1000);

  return heroesArr;
};

obtenerHeroesArr().then( console.table );

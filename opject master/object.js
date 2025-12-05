const pokemon = Object.freeze([
  { "id": 1,   "name": "Bulbasaur",   "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon",  "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",   "types": ["water"] },
  { "id": 12,  "name": "Butterfree",  "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",      "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",       "types": ["poison"] },
  { "id": 24,  "name": "Arbok",       "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",     "types": ["electric"] },
  { "id": 37,  "name": "Vulpix",      "types": ["fire"] },
  { "id": 52,  "name": "Meowth",      "types": ["normal"] },
  { "id": 63,  "name": "Abra",        "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",     "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",   "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",     "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",     "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",      "types": ["water"] },
  { "id": 115, "name": "Kangaskhan",  "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",    "types": ["psychic"] },
  { "id": 133, "name": "Eevee",       "types": ["normal"] },
  { "id": 144, "name": "Articuno",    "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",      "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",     "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",   "types": ["dragon"] }
]);

const pokm = pokemon.filter(pok=>pok.id %3===0);
console.log(pokm);
const fire = pokemon.filter(f=> f.types.includes("fire"));
console.log(fire);
const type = pokemon.filter(t=>t.types.length > 1);
console.log(type);
const nameing = pokemon.map(n=> n.name);
console.log(nameing);
const names = pokemon.filter(nm=> nm.id > 99).map(nm=> nm.name);
console.log(names);
const psn = pokemon.filter(pn=> pn.types.includes("poison")).map(pn=> pn.name);
console.log(psn);
const arr = pokemon.filter(ar=> ar.types.includes("flying"));
console.log(arr);

const func = ()=>{
  count = 0;
  const normalPokemon = pokemon.filter(c=> c.types.includes("normal"));
  count = normalPokemon.length;
  console.log(count);
}
func();

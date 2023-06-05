export const pokemonIds = [1, 20, 30, 34, 56]

const newElement = +'1'

pokemonIds.push(newElement)

interface Pokemon {
  age: number
  id: number
  name: string
}

export const pokemons: Array<Pokemon> = []

pokemons.push({ id: 2, name: 'Bulbasaur', age: 2 })
pokemons.push({ id: 5, name: 'Charmander', age: 5 })

console.log(pokemons)
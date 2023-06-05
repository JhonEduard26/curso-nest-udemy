// * Forma larga
// export class Pokemon {
//   id: number
//   name: string

import { PokeapiResponse } from "../interfaces/pokeapi-response.interface"

//   constructor(id: number, name: string) {
//     this.id = id
//     this.name = name
//     console.log('Constructor llamado')
//   }
// }

// * Forma corta
export class Pokemon {
  get imageUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
  }

  constructor(
    public readonly id: number,
    public name: string
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name.substring(0, 3) + ' ' + this.name.substring(0, 3)}`)
  }

  async getMoves() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    const data: PokeapiResponse = await response.json()
    console.log(data.moves)

    return data.moves
  }
}

export const charmander = new Pokemon(4, 'Charmander')

console.log(charmander)

// ! no se puede porque es una propiedad de solo lectura
// charmander.id = 22424
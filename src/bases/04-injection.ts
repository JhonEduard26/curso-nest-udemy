import { HttpAdapter, PokeApiAdapter, PokeApiAxiosAdapter } from '../api/pokeApi.adapter'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
  get imageUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name.substring(0, 3) + ' ' + this.name.substring(0, 3)}`)
  }

  async getMoves() {
    const { moves } = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
    console.log(moves)
  }
}

const pokeApi = new PokeApiAdapter()
const pokeApiAxios = new PokeApiAxiosAdapter()

export const charmander = new Pokemon(4, 'Charmander', pokeApi)
export const charizard = new Pokemon(6, 'Charizard', pokeApiAxios)
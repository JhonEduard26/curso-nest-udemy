class NewPokemon {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly imageUrl: string
  ) { }

  scream() {
    console.log(`NO QUIERO!!!`)
  }

  speak() {
    console.log(`NO QUIERO HABLAR!`)
  }
}

const MyDecorator = () => {
  return (target: any, propertyKey: any) => {
    return NewPokemon
  }
}


@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly imageUrl: string
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`)
  }
}

export const gengar = new Pokemon(94, 'Gengar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png')


gengar.scream()
gengar.speak()
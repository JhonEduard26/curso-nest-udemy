const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({ target })
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        }
        return wrapperFn;
      }
    }
  }
}

export class Pokemon {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly imageUrl: string
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  @Deprecated('This method will be removed in the next version')
  speak() {
    console.log(`${this.name}, ${this.name}!`)
  }

  speak2() {
    console.log(`${this.name}, ${this.name}!!!!!`)
  }
}

export const gengar = new Pokemon(
  94,
  'Gengar',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
)

gengar.speak()
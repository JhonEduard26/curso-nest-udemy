// import { charizard, charmander } from './bases/04-injection';
// import { gengar } from "./bases/05-decorators";
import { gengar } from './bases/06-deprecated';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Pokemon!</h1>
    <h3>${gengar.name}</h3>
    <img width="140" heigth="140" src="${gengar.imageUrl}" alt="${gengar.name}" />
  </div>
  `

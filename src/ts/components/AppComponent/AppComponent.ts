import CharacterComponentCard from "../CharacterComponent/CharacterComponentCard.js";
import Component from "../Component/Component.js";
import { characters } from "../characters.js";

class AppComponent extends Component {
  constructor(private parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `
      <ul class="characters-list row list-unstyled">
        <li class="col">
        </li>
      </ul>`;

    const characterList: Element = document.querySelector(".characters-list")!;

    const gotKing = new CharacterComponentCard(characterList, characters[0]);
    gotKing.render();

    const gotFighter = new CharacterComponentCard(characterList, characters[1]);
    gotFighter.render();

    const gotSquire = new CharacterComponentCard(characterList, characters[2]);
    gotSquire.render();
  }
}

export default AppComponent;

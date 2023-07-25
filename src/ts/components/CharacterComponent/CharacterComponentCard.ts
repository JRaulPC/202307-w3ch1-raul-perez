import Component from "../Component/Component.js";
import Fighter from "../Fighter/Fighter.js";
import King from "../King/King.js";
import Squire from "../Squire/Squire.js";

class CharacterComponentCard extends Component {
  character;

  constructor(
    private parentElement: Element,
    character: King | Fighter | Squire
  ) {
    super(parentElement, "li", "col");

    this.character = character;
  }

  render() {
    this.element.innerHTML = ` 
    <article class="character">
          <div class="card character__card">
            <img src="img/${this.character.characterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.character.characterData.name}
        ${this.character.characterData.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.character.characterData.age}</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Years of Reign: X</li>
                  <li>Weapon: XXX</li>
                  <li>Dexterity: X</li>
                  <li>Kiss Ass level: X</li>
                  <li>Advises to: X</li>
                  <li>Serves to: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">speak</button>
                  <button class="character__action btn">die</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </article>`;
  }
}

export default CharacterComponentCard;

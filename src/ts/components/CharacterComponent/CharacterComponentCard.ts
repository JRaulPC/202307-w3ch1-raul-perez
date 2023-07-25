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
    super(parentElement, "article", "character");

    this.character = character;
  }

  render() {
    this.element.innerHTML = ` 
     
        <div class="card character__card">
          <img src="${this.character.characterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family} </h2>
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
          </div>
        </div>
     
      </li>`;
  }
}

export default CharacterComponentCard;

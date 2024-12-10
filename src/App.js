import {Categories} from './Categories.js';
import InputView from './InputView.js';

export class App {
  async play() {
    const coaches = await InputView.readName();
    const unEatList = await InputView.readUnEat(coaches);
    const categories = new Categories();
  }
}

const app = new App();
app.play();

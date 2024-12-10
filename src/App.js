import {Categories} from './Categories.js';
import InputView from './InputView.js';
import {Menu} from './Menu.js';
import OutputView from './OutputView.js';

export class App {
  async play() {
    const coaches = await InputView.readName();
    const unEatList = await InputView.readUnEat(coaches);
    const categories = new Categories();
    OutputView.printCategoryRecommend(categories.categories);
    const menus = new Menu(unEatList, categories.categories);
    OutputView.printMenuRecommend(menus.recommandList);
  }
}

const app = new App();
app.play();

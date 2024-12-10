import {Random} from '@woowacourse/mission-utils';
import {MENU_LIST} from './MenuList.js';

export class Menu {
  constructor(unEatList, categories) {
    this.unEatList = unEatList;
    this.categories = categories;
    this.recommandMenus();
  }

  recommandMenus() {
    let recommandList = [];
    for (const {name, unEat} of this.unEatList) {
      let recommandPerPerson = [];
      while (recommandPerPerson.length < 5) {
        this.recommandMenu(recommandPerPerson, unEat);
      }
      recommandList.push({
        name: name,
        recommandMenu: recommandPerPerson,
      });
    }
  }

  recommandMenu(recommandPerPerson, unEat) {
    const menus = MENU_LIST[this.categories[recommandPerPerson.length]];
    const menu = Random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[0];
    //안먹는 음식인지 체크
    if (unEat && unEat.indexOf(menus[menu]) > -1) {
      return this.recommandMenu(recommandPerPerson, unEat);
    }
    //중복 체크
    if (recommandPerPerson.indexOf(menus[menu]) > -1) {
      return this.recommandMenu(recommandPerPerson, unEat);
    }
    recommandPerPerson.push(menus[menu]);
  }
}

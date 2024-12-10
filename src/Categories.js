import {Random} from '@woowacourse/mission-utils';

export class Categories {
  constructor() {
    this.categories = [];
    this.recommendCategory();
  }

  recommendCategory() {
    while (this.categories.length < 5) {
      let random = Random.pickNumberInRange(1, 5);
      let number = this.categories.filter((c) => c === random).length;
      if (number > 1) continue;
      this.categories.push(random);
    }
    return this.categories;
  }
}

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
    return this.makeCategoriesString();
  }

  makeCategoriesString() {
    let categoriesString = [];
    this.categories.map((category, idx) => {
      switch (category) {
        case 1:
          this.categories[idx] = '일식';
          break;
        case 2:
          this.categories[idx] = '한식';
          break;
        case 3:
          this.categories[idx] = '중식';
          break;
        case 4:
          this.categories[idx] = '아시안';
          break;
        case 5:
          this.categories[idx] = '양식';
          break;
      }
    });
    return categoriesString;
  }
}

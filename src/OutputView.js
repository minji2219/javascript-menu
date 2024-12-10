import {Console} from '@woowacourse/mission-utils';

const OutputView = {
  printCategoryRecommend(categories) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');

    Console.print('[ 카테고리 | ' + categories.join(' | ') + ' ]');
  },

  printMenuRecommend(menus) {
    menus.map((menu) => {
      Console.print('[ ' + menu.name + ' | ' + menu.recommandMenu.join(' | ') + ' ]');
    });

    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;

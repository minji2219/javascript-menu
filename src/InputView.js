import {Console} from '@woowacourse/mission-utils';
import {Coach} from './Coach.js';

const InputView = {
  async readName() {
    const input = await Console.readLineAsync('점심 메뉴 추천을 시작합니다.\n코치의 이름을 입력해 주세요. (, 로 구분)\n');
    try {
      const coach = new Coach(input);
      return coach.coaches;
    } catch (e) {
      Console.print(e.message);
      return await this.readName();
    }
  },
};
export default InputView;
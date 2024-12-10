import ERROR_MSG from './ErrorMsg.js';

export class Coach {
  constructor(coaches) {
    this.coaches = coaches;
    this.validation();
  }

  validation() {
    this.validationCoachesNum();
    this.validationCoachesNameLength();
  }

  validationCoachesNum() {
    this.coaches = this.coaches.split(',');
    if (this.coaches.length < 2) throw new Error(ERROR_MSG.invalidNumber);
  }

  validationCoachesNameLength() {
    this.coaches.map((coach) => {
      if ([...coach].length < 2 || [...coach].length > 4) throw new Error(ERROR_MSG.invalidNameLength);
    });
  }
}

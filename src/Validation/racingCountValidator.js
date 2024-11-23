import { ERROR_MESSAGES } from '../Constants/errorMessages.js';

export class RacingCountExceptionalHandler {
  validateRacingCount(racingCount) {
    this.racingCount = racingCount;

    this.checkValidationRules().forEach((element) => {
      if (element[0] === true) {
        throw new Error(element[1]);
      }
    });
  }

  checkValidationRules() {
    return [
      [this.isNoInput(), ERROR_MESSAGES.COMMON.NO_INPUT],
      [this.isNotNumeric(), ERROR_MESSAGES.RACING_CAR.IS_NOT_NUMERIC],
    ];
  }

  isNoInput() {
    return this.racingCount === '';
  }

  isNotNumeric() {
    return Number.isNaN(Number(this.racingCount));
  }
}

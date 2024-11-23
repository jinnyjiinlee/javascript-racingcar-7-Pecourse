import { ERROR_MESSAGES } from '../Constants/errorMessages.js';

export class CarNamesExceptionalHandler {
  validateCarNames(carNamesInput, parsedCarNames) {
    this.carNamesInput = carNamesInput;
    this.parsedCarNames = parsedCarNames;

    this.checkValidationRules().forEach((element) => {
      if (element[0] === true) {
        throw new Error(element[1]);
      }
    });
  }

  checkValidationRules() {
    return [
      [this.isNoInput(), ERROR_MESSAGES.COMMON.NO_INPUT],
      [this.isNumeric(), ERROR_MESSAGES.CAR_NAMES.NUMERIC],
      [this.isLengthExceed(), ERROR_MESSAGES.CAR_NAMES.LENGTH_EXCEED],
    ];
  }

  isNoInput() {
    return this.carNamesInput === '';
  }

  isNumeric() {
    return this.parsedCarNames.some((carName) => !Number.isNaN(Number(carName)));
  }

  isLengthExceed() {
    return this.parsedCarNames.some((carName) => carName.length > 5);
  }
}

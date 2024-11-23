import { ERROR_MESSAGES } from '../Constants/errorMesages.js';

export class CarNamesExceptionalHandler {
  validateCarNames(parsedCarNames) {
    this.parsedCarNames = parsedCarNames;

    this.checkValidationRules().forEach((element) => {
      if (element[0] === true) {
        throw new Error(element[1]);
      }
    });
  }

  checkValidationRules() {
    return [[this.isLengthExceed(), ERROR_MESSAGES.CAR_NAMES.LENGTH_EXCEED]];
  }

  isLengthExceed() {
    return this.parsedCarNames.some((carName) => carName.length > 5);
  }
}

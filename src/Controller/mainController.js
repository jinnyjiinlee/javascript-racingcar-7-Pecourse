import { parseCarNames } from '../Model/carNamesParser.js';
import { RaceMovementHandler } from '../Model/raceMovement.js';
import { CarNamesExceptionalHandler } from '../Validation/carNamesValidator.js';
import { InputHandler } from '../View/inputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
  }

  // eslint-disable-next-line max-lines-per-function
  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    const parsedCarNames = parseCarNames(carNamesInput);
    new CarNamesExceptionalHandler().validateCarNames(parsedCarNames);

    const racingCountInput = await this.input.getRacingCountInput();

    new RaceMovementHandler().getRaceMovement(parsedCarNames, racingCountInput);

    // 각 자동차가 횟수 동안 전진
  }
}

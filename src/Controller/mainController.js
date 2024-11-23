import { parseCarNames } from '../Model/carNamesParser.js';
import { CarNamesExceptionalHandler } from '../Validation/carNamesValidator.js';
import { InputHandler } from '../View/inputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
  }

  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    const parsedCarNames = parseCarNames(carNamesInput);
    new CarNamesExceptionalHandler().validateCarNames(parsedCarNames);

    const racingCountInput = await this.input.getRacingCountInput();
  }
}

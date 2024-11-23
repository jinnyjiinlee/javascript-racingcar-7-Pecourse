import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { parseCarNames } from '../Model/carNamesParser.js';
import { RaceMovementHandler } from '../Model/raceMovement.js';
import { CarNamesExceptionalHandler } from '../Validation/carNamesValidator.js';
import { WinnerFinderHandler } from '../Model/findWinner.js';


export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  // eslint-disable-next-line max-lines-per-function
  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();
    const parsedCarNames = parseCarNames(carNamesInput);
    new CarNamesExceptionalHandler().validateCarNames(parsedCarNames);

    const racingCountInput = await this.input.getRacingCountInput();

    const finalRaceStatus = new RaceMovementHandler().getRaceMovement(parsedCarNames, racingCountInput);
    console.log('finalRaceStatus: ', finalRaceStatus)
    
    new WinnerFinderHandler().findWinner(parsedCarNames, finalRaceStatus);
    
    
    new OutputHandler().printResult();
  }
}

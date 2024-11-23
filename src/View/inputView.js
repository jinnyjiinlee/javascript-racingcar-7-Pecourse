import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants/mesages.js';



export class InputHandler {
  async getCarNamesInput() {
    const carNamesInput = await Console.readLineAsync(MESSAGES.CAR_NAMES_INPUT);
    

    return carNamesInput;
  }

  async getRacingCountInput() {
    const racingCountInput = await Console.readLineAsync(
      MESSAGES.RACING_COUNT_INPUT,
    );

    return racingCountInput;
  }
}

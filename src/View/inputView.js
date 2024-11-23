import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants/mesages.js';

export class InputHandler {
  async getCarNamesInput() {
    const carNamesInput = await Console.readLineAsync(MESSAGES.CAR_NAMES_INPUT);

    return carNamesInput;
  }
}

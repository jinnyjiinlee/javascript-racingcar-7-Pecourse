import { InputHandler } from '../View/inputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
  }

  async initializeProgram() {
    const carNamesInput = await this.input.getCarNamesInput();

    const racingCountInput = await this.input.getRacingCountInput();
  }
}

import { InputHandler } from '../View/inputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler() ;
  }

  initializeProgram() {
    const carNamesInput = this.input.getCarNamesInput()
  }
}

import { MainController } from './Controller/mainController.js';

class App {
  async run() {
    const controller = new MainController();
    await controller.initializeProgram();
  }
}

export default App;

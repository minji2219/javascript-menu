import InputView from './InputView.js';

export class App {
  async play() {
    const coaches = await InputView.readName();
    await InputView.readUnEat(coaches);
  }
}

const app = new App();
app.play();

import { Console, Random } from '@woowacourse/mission-utils';

export class RaceMovementHandler {
  // eslint-disable-next-line max-lines-per-function
  getRaceMovement(parsedCarNames, racingCountInput) {
    this.parsedCarNames = parsedCarNames;
    this.racingCount = racingCountInput;
    this.racingMovement = [];

    this.InitializeArray();
    Console.print('\n실행 결과');

    for (let i = 0; i < this.racingCount; i += 1) {
      this.MakeRandomNumberAndMovementForOnce();
    }

    return this.racingMovement;
  }

  // TODO: 리펙토링
  InitializeArray() {
    for (let i = 0; i < this.parsedCarNames.length; i += 1) {
      this.racingMovement.push(0);
    }
  }

  // TODO: 리펙토링
  MakeRandomNumberAndMovementForOnce() {
    for (let j = 0; j < this.parsedCarNames.length; j += 1) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.racingMovement[j] += 1;
      }
      Console.print(
        `${this.parsedCarNames[j]} : ${'-'.repeat(this.racingMovement[j])}`,
      );
    }
    Console.print('');
  }
}

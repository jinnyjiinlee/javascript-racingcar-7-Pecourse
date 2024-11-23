import { Console } from '@woowacourse/mission-utils';

export class WinnerFinderHandler {
  findWinner(parsedCarNames, finalRaceStatus) {
    this.finalRaceStatus = finalRaceStatus;
    this.parsedCarNames = parsedCarNames;

    this.findMaxNumber();

    this.winnerCarNames = [];

    this.findWinnerCarNames();

    // console.log('this.winnerCarNames: ', this.winnerCarNames);

    this.printWinner();
  }

  findMaxNumber() {
    // 배열에서 가장 큰수 찾기
    this.MaxFinalRaceNumber = Math.max.apply(null, this.finalRaceStatus);
    console.log('MaxFinalRaceNumber: ', this.MaxFinalRaceNumber);
  }

  findWinnerCarNames() {
    for (let i = 0; i < this.parsedCarNames.length; i += 1) {
      if (this.finalRaceStatus[i] === this.MaxFinalRaceNumber) {
        this.winnerCarNames.push(this.parsedCarNames[i]);
      }
    }
  }

  printWinner() {
    Console.print(`최종 우승자 : ${this.winnerCarNames.join(', ')}`);
  }
}

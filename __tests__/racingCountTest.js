import { RacingCountExceptionalHandler } from '../src/Validation/racingCountValidator.js';

describe('자동차 경기 횟수 입력', () => {
  test('빈값으로 입력한 경우 입력한 경우 예외가 발생한다.', () => {
    const racingCount = '';
    expect(() => {
      new RacingCountExceptionalHandler().validateRacingCount(racingCount);
    }).toThrow('[ERROR]');
  });

  test('숫자로 입력하지 않은 경우 에러 처리 한다.', () => {
    const racingCount = '세번';
    expect(() => {
      new RacingCountExceptionalHandler().validateRacingCount(racingCount);
    }).toThrow('[ERROR]');
  });
});

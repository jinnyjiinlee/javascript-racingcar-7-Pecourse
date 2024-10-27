import splitAndTrimCarName from '../src/services/carNamesTrimmer.js';
import {
  validateNotEmpty,
  validateStringInput,
  validateArrNotDuplication,
} from '../src/validations/carNamesValidator.js';
import { isRacingCountTypeNumber } from '../src/validations/racingCountValidator.js';

describe('자동차 이름 입력 받기', () => {
  test('쉼표로 구분된 자동차 이름을 배열로 반환한다.', async () => {
    const inputs = 'pobi, jinny';
    expect(splitAndTrimCarName(inputs)).toEqual(['pobi', 'jinny']);
  });

  test('쉼표(,) 뒤 띄어쓰기는 이름에 포함되지 않는다.', async () => {
    const inputs = 'pobi , jinny';
    expect(splitAndTrimCarName(inputs)).toEqual(['pobi', 'jinny']);
  });

  // TO-DO: refactor, - [style]
  test('빈 입력값은 에러를 던진다.', () => {
    const inputs = '';
    expect(() => validateNotEmpty(inputs)).toThrow('[ERROR]');
  });

  test('자동차 이름에 숫자가 포함되면 에러를 던진다.', () => {
    const inputs = 'pobi, 123jinny';
    expect(() => validateStringInput(inputs)).toThrow('[ERROR]');
  });

  test('자동차 이름이 중복되면 에러를 던진다.', () => {
    const inputs = 'pobi, jinny, jinny';
    expect(() => validateArrNotDuplication(inputs)).toThrow('[ERROR]');
  });
});

describe('경기 횟수 입력 받기', () => {
  test('경기 횟수에 문자열을 입력하면 에러를 던진다.', () => {
    const input = 'FiveTimes';
    expect(() => isRacingCountTypeNumber(input)).toThrow('[ERROR] 숫자가 아닙니다. ');
  });
});

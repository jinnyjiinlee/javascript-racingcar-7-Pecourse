import { CarNamesExceptionalHandler } from '../src/Validation/carNamesValidator.js';

describe('자동차 이름 입력', () => {
  test('빈값으로 입력한 경우 입력한 경우 예외가 발생한다.', () => {
    const carNamesInput = '';
    const parsedCarNames = [];
    expect(() => {
      new CarNamesExceptionalHandler().validateCarNames(
        carNamesInput,
        parsedCarNames,
      );
    }).toThrow('[ERROR]');
  });

  test('숫자로 입력한 경우 에러 처리 한다.', () => {
    const carNamesInput = '';
    const parsedCarNames = ['1234'];
    expect(() => {
      new CarNamesExceptionalHandler().validateCarNames(
        carNamesInput,
        parsedCarNames,
      );
    }).toThrow('[ERROR]');
  });

  test('5글자 초과 시 에러 처리 한다.', () => {
    const carNamesInput = '';
    const parsedCarNames = ['JinnyCar'];
    expect(() => {
      new CarNamesExceptionalHandler().validateCarNames(
        carNamesInput,
        parsedCarNames,
      );
    }).toThrow('[ERROR]');
  });
});

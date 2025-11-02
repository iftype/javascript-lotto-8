import ERROR_MESSAGES from '../../constants/errorMessages.js';

class InputWinningNumberValidator {
  static validate(winningNumbers) {
    if (!InputWinningNumberValidator.#isArrray(winningNumbers)) {
      throw new Error(ERROR_MESSAGES.NOT_ARRAY);
    }
    if (!InputWinningNumberValidator.#isInteger(winningNumbers)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
  }

  static #isArrray(winningNumbers) {
    return Array.isArray(winningNumbers);
  }

  static #isInteger(winningNumbers) {
    return winningNumbers.every((num) => Number.isInteger(num));
  }
}

export default InputWinningNumberValidator;

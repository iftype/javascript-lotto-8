import Parser from '../../utils/Parser.js';
import InputWinningNumberValidator from '../../validators/input/InputWinningNumberValidator.js';

class WinningNumbersDto {
  #winningNumbers;

  constructor(winningNumbers) {
    const parseWinningNumbers = Parser.stringToNumberArray(winningNumbers);
    InputWinningNumberValidator.validate(parseWinningNumbers);
    this.#winningNumbers = parseWinningNumbers;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }
}
export default WinningNumbersDto;

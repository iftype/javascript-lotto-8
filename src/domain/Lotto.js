import LottoValidator from '../validator/LottoValidator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    LottoValidator.validate(numbers);
  }

  #sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;

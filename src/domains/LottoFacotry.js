import Lotto from './Lotto.js';

class LottoFactory {
  #piker;

  constructor(piker) {
    this.#piker = piker;
  }

  createLotto(numbers) {
    const newNumbers = this.#piker.pick(numbers);
    return new Lotto(newNumbers);
  }
}

export default LottoFactory;

class LottoState {
  #purchaseAmount;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #winningRate;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.#winningRate = [];
  }

  setPurchaseAmount(input) {
    this.#purchaseAmount = input;
  }

  setLottos(input) {
    this.#lottos = input;
  }

  setWinningNumbers(input) {
    this.#winningNumbers = input;
  }

  setBonusNumber(input) {
    this.#bonusNumber = input;
  }

  setWinningRate(input) {
    this.#winningRate = input;
  }

  getState() {
    return {
      purchaseAmount: this.#purchaseAmount,
      lottos: this.#lottos,
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
      winningRate: this.#winningRate,
    };
  }
}
export default LottoState;

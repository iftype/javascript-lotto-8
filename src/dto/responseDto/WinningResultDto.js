class WinningResultDto {
  #winningStats;
  #winningRate;

  constructor({ winningStats, winningRate }) {
    this.#winningStats = winningStats;
    this.#winningRate = winningRate;
  }

  toJSON() {
    return {
      winningStats: this.#winningStats,
      winningRate: this.#winningRate,
    };
  }
}
export default WinningResultDto;

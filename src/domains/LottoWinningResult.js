import LOTTO_SETTING from '../constants/lottoSetting.js';

class LottoWinningResult {
  // 우승자 랭킹 카운트와 총 상금 반환
  static getWinningStats(lottos, winnintLottos, bonusLotto) {
    const matchs = LottoWinningResult.#getWinningMatch(lottos, winnintLottos, bonusLotto);
    const ranks = LottoWinningResult.#getWinningRank(matchs);

    const winningStats = LottoWinningResult.#getWinningCount(ranks);
    const totalWinningAmount = LottoWinningResult.#getWinningTotalGains(ranks);

    return { winningStats, totalWinningAmount };
  }

  // 수익률
  static getWinningRate(purchaseAmount, totalWinningAmount) {
    if (totalWinningAmount === 0) return 0;
    return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
  }

  // #당첨 카운트 반환 형식 [winning:일치 갯수, bonus: 보너스여부]
  static #getWinningMatch(lottos, winnintLottos, bonusLotto) {
    return lottos.map((lotto) => ({
      winning: lotto.countNumbers(winnintLottos),
      bonus: lotto.hasLottoNumber(bonusLotto),
    }));
  }

  // #순위 정하는 메서드
  static #getWinningRank(winningStats) {
    return winningStats.map(({ winning, bonus }) => {
      if (winning === 6) return { rank: 'FIRST' };
      if (winning === 5 && bonus) return { rank: 'SECOND' };
      if (winning === 5) return { rank: 'THIRD' };
      if (winning === 4) return { rank: 'FOURTH' };
      if (winning === 3) return { rank: 'FIFTH' };
      return { rank: 'OTHER' };
    });
  }

  // #랭크로 총 순위 카운트
  static #getWinningCount(winningRank) {
    const count = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0, OTHER: 0 };
    winningRank.forEach(({ rank }) => {
      count[rank] += 1;
    });
    return count;
  }

  // #랭크로 총 상금 계산
  static #getWinningTotalGains(winningRank) {
    const { PRIZES } = LOTTO_SETTING;
    return winningRank.reduce((total, { rank }) => total + PRIZES[rank], 0);
  }
}
export default LottoWinningResult;

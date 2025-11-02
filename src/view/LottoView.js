import { Console } from '@woowacourse/mission-utils';

const INFO_MEESAGE = {
  INFO_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INFO_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INFO_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

class LottoView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INFO_MEESAGE.INFO_PURCHASE_AMOUNT);
    return purchaseAmount;
  }

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INFO_MEESAGE.INFO_WINNING_NUMBERS);
    return winningNumbers;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INFO_MEESAGE.INFO_BONUS_NUMBER);
    return bonusNumber;
  }

  printPurchaseLottos(lottosData) {
    const { lottos } = lottosData;
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printWinningResult(winngResultData) {
    const { winningStats, winningRate } = winngResultData;
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = winningStats;
    const template = `\n당첨 통계
---
3개 일치 (5,000원) - ${FIFTH}개
4개 일치 (50,000원) - ${FOURTH}개
5개 일치 (1,500,000원) - ${THIRD}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${SECOND}개
6개 일치 (2,000,000,000원) - ${FIRST}개
총 수익률은 ${winningRate}%입니다.`;

    Console.print(template);
  }

  printError(err) {
    Console.print(err.message);
  }
}

export default LottoView;

import { Console } from '@woowacourse/mission-utils';

const INFO_MEESAGE = {
  INFO_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INFO_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INFO_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

class LottoInputView {
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
}

export default LottoInputView;

import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../constants/errorMessages.js';

const INFO_MEESAGE = Object.freeze({
  INFO_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INFO_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INFO_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

class LottoInputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INFO_MEESAGE.INFO_PURCHASE_AMOUNT);
    return LottoInputView.#checkBlank(purchaseAmount);
  }

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INFO_MEESAGE.INFO_WINNING_NUMBERS);
    return LottoInputView.#checkBlank(winningNumbers);
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INFO_MEESAGE.INFO_BONUS_NUMBER);
    return LottoInputView.#checkBlank(bonusNumber);
  }

  static #checkBlank(input) {
    if (input.trim() === '') throw new Error(ERROR_MESSAGES.BLANK);
    return input;
  }
}

export default LottoInputView;

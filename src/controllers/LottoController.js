import BonusNumberDto from '../dtos/requestDto/BonusNumberDto.js';
import PurchaseAmountDto from '../dtos/requestDto/PurchaseAmountDto.js';
import WinningNumbersDto from '../dtos/requestDto/WinningNumbersDto.js';

class LottoController {
  #lottoPurchaseService;
  #winningResultService;
  #lottoInputView;
  #lottoOutputView;

  constructor({ lottoPurchaseService, winningResultService, lottoOutputView, lottoInputView }) {
    this.#lottoPurchaseService = lottoPurchaseService;
    this.#winningResultService = winningResultService;
    this.#lottoInputView = lottoInputView;
    this.#lottoOutputView = lottoOutputView;
  }

  async runLotto() {
    try {
      await this.#processPurchaseAmount();
      this.#processLottoPurchase();

      await this.#processWinningNumbers();
      await this.#processBonusNumbers();
      this.#processWinningResult();
      return true;
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return false;
    }
  }

  async #processPurchaseAmount() {
    try {
      const purchaseAmount = await this.#lottoInputView.readPurchaseAmount();
      const purchaseAmountDto = new PurchaseAmountDto(purchaseAmount);
      this.#lottoPurchaseService.savePurchaseAmount(purchaseAmountDto);
      return true;
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return this.#processPurchaseAmount();
    }
  }

  async #processWinningNumbers() {
    try {
      const winningNumbers = await this.#lottoInputView.readWinningNumbers();
      const purchaseAmountDto = new WinningNumbersDto(winningNumbers);
      this.#winningResultService.saveWinningNumbers(purchaseAmountDto);
      return true;
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return this.#processWinningNumbers();
    }
  }

  async #processBonusNumbers() {
    try {
      const bonusNumber = await this.#lottoInputView.readBonusNumber();
      const bonusNumberDto = new BonusNumberDto(bonusNumber);
      this.#winningResultService.saveBonusNumber(bonusNumberDto);
      return true;
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return this.#processBonusNumbers();
    }
  }

  #processLottoPurchase() {
    const purchasedLottos = this.#lottoPurchaseService.getPurchasedLottos();
    const purchasedLottosDto = purchasedLottos.toJSON();
    this.#lottoOutputView.printPurchaseLottos(purchasedLottosDto);
  }

  #processWinningResult() {
    const winningResult = this.#winningResultService.getWinningResult();
    const winningResultDto = winningResult.toJSON();
    this.#lottoOutputView.printWinningResult(winningResultDto);
  }
}

export default LottoController;

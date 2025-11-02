import BonusNumberDto from '../dto/requestDto/BonusNumberDto.js';
import PurchaseAmountDto from '../dto/requestDto/PurchaseAmountDto.js';
import WinningNumbersDto from '../dto/requestDto/WinningNumbersDto.js';

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

  async processLottoPurchase() {
    try {
      const purchaseAmount = await this.#lottoInputView.readPurchaseAmount();
      const purchaseAmountDto = new PurchaseAmountDto(purchaseAmount);
      this.#lottoPurchaseService.savePurchaseAmount(purchaseAmountDto);

      const purchasedLottos = this.#lottoPurchaseService.getPurchasedLottos();
      const purchasedLottosDto = purchasedLottos.toJSON();
      this.#lottoOutputView.printPurchaseLottos(purchasedLottosDto);
      return this.#processWinningResult();
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return this.processLottoPurchase();
    }
  }

  // 메서드명 고민해보기
  async #processWinningResult() {
    try {
      const winningNumbers = await this.#lottoInputView.readWinningNumbers();
      const purchaseAmountDto = new WinningNumbersDto(winningNumbers);
      this.#winningResultService.saveWinningNumbers(purchaseAmountDto);

      const bonusNumber = await this.#lottoInputView.readBonusNumber();
      const bonusNumberDto = new BonusNumberDto(bonusNumber);
      this.#winningResultService.saveBonusNumber(bonusNumberDto);

      const winningResult = this.#winningResultService.getWinningResult();
      const winningResultDto = winningResult.toJSON();
      this.#lottoOutputView.printWinningResult(winningResultDto);

      return true;
    } catch (err) {
      this.#lottoOutputView.printError(err);
      return this.#processWinningResult();
    }
  }
}

export default LottoController;

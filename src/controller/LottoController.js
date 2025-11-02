import BonusNumberDto from '../dto/requestDto/BonusNumberDto.js';
import PurchaseAmountDto from '../dto/requestDto/PurchaseAmountDto.js';
import WinningNumbersDto from '../dto/requestDto/WinningNumbersDto.js';

class LottoController {
  #lottoPurchaseService;
  #lottoView;
  #winningResultService;

  constructor(lottoPurchaseService, winningResultService, lottoView) {
    this.#lottoPurchaseService = lottoPurchaseService;
    this.#winningResultService = winningResultService;
    this.#lottoView = lottoView;
  }

  async processLottoPurchase() {
    try {
      const purchaseAmount = await this.#lottoView.readPurchaseAmount();
      const purchaseAmountDto = new PurchaseAmountDto(purchaseAmount);
      this.#lottoPurchaseService.savePurchaseAmount(purchaseAmountDto);

      const purchasedLottos = this.#lottoPurchaseService.getPurchasedLottos();
      const purchasedLottosDto = purchasedLottos.toJSON();
      this.#lottoView.printPurchaseLottos(purchasedLottosDto);
      return this.#processWinningResult();
    } catch (err) {
      this.#lottoView.printError(err);
      return this.processLottoPurchase();
    }
  }

  // 메서드명 고민해보기
  async #processWinningResult() {
    try {
      const winningNumbers = await this.#lottoView.readWinningNumbers();
      const purchaseAmountDto = new WinningNumbersDto(winningNumbers);
      this.#winningResultService.saveWinningNumbers(purchaseAmountDto);

      const bonusNumber = await this.#lottoView.readBonusNumber();
      const bonusNumberDto = new BonusNumberDto(bonusNumber);
      this.#winningResultService.saveBonusNumber(bonusNumberDto);

      const winningResult = this.#winningResultService.getWinningResult();
      const winningResultDto = winningResult.toJSON();
      this.#lottoView.printWinningResult(winningResultDto);

      return true;
    } catch (err) {
      this.#lottoView.printError(err);
      return this.#processWinningResult();
    }
  }
}

export default LottoController;

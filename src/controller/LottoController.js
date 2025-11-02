import PurchaseAmountDto from '../dto/requestDto/PurchaseAmountDto.js';

class LottoController {
  #lottoPurchaseService;
  #lottoView;

  constructor(lottoPurchaseService, lottoView) {
    this.#lottoPurchaseService = lottoPurchaseService;
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
      return '';
      // return this.getWinningRate();
    } catch (err) {
      console.log(err);
      this.#lottoView.printError(err);
      return this.processLottoPurchase();
    }
  }

  // 메서드명 고민해보기
  async getWinningRate() {}
}

export default LottoController;

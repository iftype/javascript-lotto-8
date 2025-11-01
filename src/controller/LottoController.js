import LottoRequestDto from '../dto/LottoRequestDto.js';

class LottoController {
  #lottoService;
  #lottoView;

  constructor(lottoService, lottoView) {
    this.#lottoService = lottoService;
    this.#lottoView = lottoView;
  }

  async purchase() {
    try {
      const purchaseAmount = await this.#lottoView.readPurchaseAmount();
      const requestDTO = new LottoRequestDto({ purchaseAmount });
      const responseDto = this.#lottoService.purchaseLotto(requestDTO);
      const resultLottos = responseDto.toJSON();
      this.#lottoView.printPurchaseLottos(resultLottos);
      return this.getWinningRate();
    } catch (err) {
      // 에러 출력 메세지 컴포넌트만들기 ㅡ ㅡ ㅡ ㅡㅡ ㅡㅡㅡ ㅡㅡ ㅡ ㅡ ㅡㅡㅡ ㅡㅡ
      console.log(err);
      return this.purchase();
    }
  }

  // 메서드명 고민해보기
  async getWinningRate() {
    // try {
    //   const winningNumbers = await this.#lottoView.readWinningNumbers();
    //   const bonusNumber = await this.#lottoView.readBonusNumber();
    //   const result = this.#lottoService.getWinningRate(winningNumbers, bonusNumber);
    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}

export default LottoController;

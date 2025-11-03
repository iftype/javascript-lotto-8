import LottoFactory from './domains/LottoFacotry.js';
import RandomPicker from './domains/RandomPicker.js';
import LottoRepository from './repositories/LottoRepository.js';
import LottoPurchaseService from './services/LottoPurchaseService.js';
import WinningResultService from './services/WinningResultService.js';
import LottoInputView from './views/LottoInputView.js';
import LottoOutputView from './views/LottoOutputView.js';
import LottoController from './controllers/LottoController.js';

class App {
  #lottoController;

  constructor() {
    const lottoRepository = new LottoRepository();

    // 구매 의존성, 랜덤조건 주입
    const randomPiker = new RandomPicker();
    const randomLottoFactory = new LottoFactory(randomPiker);
    const lottoPurchaseService = new LottoPurchaseService(randomLottoFactory, lottoRepository);

    // 당첨 의존성, 고정 생성 팩토리 주입
    const winningResultService = new WinningResultService(lottoRepository);

    const lottoInputView = new LottoInputView();
    const lottoOutputView = new LottoOutputView();

    this.#lottoController = new LottoController({
      lottoPurchaseService,
      winningResultService,
      lottoOutputView,
      lottoInputView,
    });
  }

  async run() {
    await this.#lottoController.runLotto();
  }
}

export default App;

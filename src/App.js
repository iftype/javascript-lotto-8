import LottoNumberFactory from './domains/LottoNumberFactory.js';
import LottoFactory from './domains/LottoFacotry.js';
import RandomPicker from './utils/RandomPicker.js';
import LottoStore from './domains/LottoStore.js';
import LottoRepository from './repositories/LottoRepository.js';
import LottoWinningFactory from './domains/LottoWinningFactory.js';
import LottoPurchaseService from './services/LottoPurchaseService.js';
import WinningResultService from './services/WinningResultService.js';
import LottoInputView from './views/LottoInputView.js';
import LottoOutputView from './views/LottoOutputView.js';
import LottoController from './controllers/LottoController.js';

class App {
  #lottoController;

  constructor() {
    const lottoNumberFactory = LottoNumberFactory;
    const lottoRepository = new LottoRepository();

    // 구매 의존성, 랜덤조건 주입
    const randomPiker = new RandomPicker();
    const randomLottoFactory = new LottoFactory(randomPiker, lottoNumberFactory);
    const lottoStore = new LottoStore(randomLottoFactory);
    const lottoPurchaseService = new LottoPurchaseService(lottoStore, lottoRepository);

    // 당첨 의존성, 고정 생성 팩토리 주입
    const lottoWinningFactory = new LottoWinningFactory(lottoNumberFactory);
    const winningResultService = new WinningResultService(lottoWinningFactory, lottoRepository);

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
    await this.#lottoController.processLottoPurchase();
  }
}

export default App;

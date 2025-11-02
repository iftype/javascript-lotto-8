import LottoController from './controller/LottoController.js';
import LottoFactory from './domain/LottoFacotry.js';
import LottoView from './view/LottoView.js';
import LottoStore from './domain/LottoStore.js';
import LottoNumberFactory from './domain/LottoNumberFactory.js';
import LottoRepository from './repository/LottoRepository.js';
import LottoPurchaseService from './services/LottoPurchaseService.js';
import RandomPicker from './utils/RandomPicker.js';
import LottoWinningFactory from './domain/LottoWinningFactory.js';
import WinningResultService from './services/WinningResultService.js';

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

    const lottoView = new LottoView();

    this.#lottoController = new LottoController(
      lottoPurchaseService,
      winningResultService,
      lottoView,
    );
  }

  async run() {
    await this.#lottoController.processLottoPurchase();
  }
}

export default App;

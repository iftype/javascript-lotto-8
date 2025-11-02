import LottoController from './controller/LottoController.js';
import LottoFactory from './domain/LottoFacotry.js';
import LottoView from './view/LottoView.js';
import LottoStore from './domain/LottoStore.js';
import LottoNumberFactory from './domain/LottoNumberFactory.js';
import LottoRepository from './repository/LottoRepository.js';
import LottoPurchaseService from './services/LottoPurchaseService.js';
import RandomPicker from './utils/RandomPicker.js';

class App {
  #lottoController;

  constructor() {
    const lottoNumberFactory = LottoNumberFactory;

    // lottoStore: 랜덤 전략 팩토리 주입
    const randomStrategy = new RandomPicker();
    const randomLottoFactory = new LottoFactory(randomStrategy, lottoNumberFactory);
    const lottoStore = new LottoStore(randomLottoFactory);

    // lottoWinning: 고정값 전략 팩토리 주입
    // const lottoWinningFactory = new LottoWinningFactory(lottoNumberFactory);

    // lottoSerivce 주입단계
    const lottoRepository = new LottoRepository();
    const lottoPurchaseService = new LottoPurchaseService(lottoStore, lottoRepository);

    const lottoView = new LottoView();
    this.#lottoController = new LottoController(lottoPurchaseService, lottoView);
  }

  async run() {
    await this.#lottoController.processLottoPurchase();
  }
}

export default App;

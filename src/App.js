import LottoController from './controller/LottoController.js';
import LottoFactory from './domain/LottoFacotry.js';
import LottoService from './services/LottoService.js';
import LottoView from './view/LottoView.js';
import LottoStore from './domain/LottoStore.js';
import LottoNumberFactory from './domain/LottoNumberFactory.js';
import LottoRepository from './repository/LottoRepository.js';
import RandomPicker from './domain/strategy/RandomPicker.js';
import FixedPicker from './domain/strategy/FixedPicker.js';
import LottoWinning from './domain/LottoWinning.js';

class App {
  #lottoController;

  constructor() {
    const lottoNumberFactory = LottoNumberFactory;

    // lottoStore: 랜덤 전략 팩토리 주입
    const randomStrategy = new RandomPicker();
    const randomLottoFactory = new LottoFactory(randomStrategy, lottoNumberFactory);
    const lottoStore = new LottoStore(randomLottoFactory);

    // lottoWinning: 고정값 전략 팩토리 주입
    const fixedStrategy = new FixedPicker();
    const fixedLottoFactory = new LottoFactory(fixedStrategy, lottoNumberFactory);
    const lottoWinning = new LottoWinning(fixedLottoFactory);

    // lottoSerivce 주입단계
    const lottoRepository = new LottoRepository();
    const lottoService = new LottoService(lottoStore, lottoWinning, lottoRepository);

    const lottoView = new LottoView();
    this.#lottoController = new LottoController(lottoService, lottoView);
  }

  async run() {
    await this.#lottoController.purchase();
  }
}

export default App;

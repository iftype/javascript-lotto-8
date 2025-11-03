import LottoPrice from '../domains/LottoPrice.js';
import PurchasedLottosDto from '../dtos/responseDto/PurchasedLottosDto.js';

class LottoPurchaseService {
  #lottoRepository;
  #randomLottoFactory;
  constructor(randomLottoFactory, lottoRepository) {
    this.#randomLottoFactory = randomLottoFactory;
    this.#lottoRepository = lottoRepository;
  }

  savePurchaseAmount(requestDTO) {
    const { purchaseAmount } = requestDTO;
    const lottoPrice = new LottoPrice(purchaseAmount);
    this.#lottoRepository.save('admin', { purchaseAmount: lottoPrice.purchaseAmount });
  }

  getPurchasedLottos() {
    const { purchaseAmount } = this.#lottoRepository.findAll('admin');
    const lottoPrice = new LottoPrice(purchaseAmount);
    const lottoCount = lottoPrice.exchange();
    const lottos = Array.from({ length: lottoCount }, () => this.#randomLottoFactory.createLotto());

    const insertLotto = lottos.map((lotto) => lotto.getNumbers());
    this.#lottoRepository.save('admin', { lottos: insertLotto });
    return new PurchasedLottosDto({ lottos });
  }
}

export default LottoPurchaseService;

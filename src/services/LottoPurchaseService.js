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
    this.#lottoRepository.save('admin', { lottoPrice });
  }

  getPurchasedLottos() {
    const { lottoPrice } = this.#lottoRepository.findAll('admin');
    const lottoCount = lottoPrice.exchange();
    const lottos = Array.from({ length: lottoCount }, () => this.#randomLottoFactory.createLotto());
    this.#lottoRepository.save('admin', { lottos });
    return new PurchasedLottosDto({ lottos });
  }
}

export default LottoPurchaseService;

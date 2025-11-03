import LottoPrice from '../domains/LottoPrice.js';
import PurchasedLottosDto from '../dtos/responseDto/PurchasedLottosDto.js';

class LottoPurchaseService {
  #lottoStore;
  #lottoRepository;

  constructor(lottoStore, lottoRepository) {
    this.#lottoStore = lottoStore;
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
    const lottos = this.#lottoStore.buyLotto(lottoCount);
    this.#lottoRepository.save('admin', { lottos });
    return new PurchasedLottosDto({ lottos });
  }
}

export default LottoPurchaseService;

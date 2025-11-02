import LottoPrice from '../domain/LottoPrice.js';
import PurchasedLottosDto from '../dto/responseDto/PurchasedLottosDto.js';
import PurchaseValidator from '../validator/domainValidator/PurchaseValidator.js';

class LottoPurchaseService {
  constructor(lottoStore, lottoRepository) {
    this.lottoStore = lottoStore;
    this.lottoRepository = lottoRepository;
  }

  savePurchaseAmount(requestDTO) {
    const { purchaseAmount } = requestDTO;
    PurchaseValidator.validate(purchaseAmount);
    this.lottoRepository.save('admin', { purchaseAmount });
  }

  getPurchasedLottos() {
    const { purchaseAmount } = this.lottoRepository.findAll('admin');
    const lottoCount = LottoPrice.exchange(purchaseAmount);
    const lottos = this.lottoStore.buyLotto(lottoCount);
    this.lottoRepository.save('admin', { lottos });
    return new PurchasedLottosDto({ lottos });
  }
}

export default LottoPurchaseService;

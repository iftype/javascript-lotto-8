import LOTTO_SETTING from '../constants/lottoSetting.js';
import PurchasedLottosDto from '../dtos/responseDto/PurchasedLottosDto.js';
import PurchaseValidator from '../validators/domain/PurchaseValidator.js';

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
    const lottoCount = purchaseAmount / LOTTO_SETTING.PURCHASE_UNIT;
    const lottos = this.lottoStore.buyLotto(lottoCount);
    this.lottoRepository.save('admin', { lottos });
    return new PurchasedLottosDto({ lottos });
  }
}

export default LottoPurchaseService;

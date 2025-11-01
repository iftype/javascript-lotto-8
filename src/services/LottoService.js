import LottoPrice from '../domain/LottoPrice.js';
import LottoResponseDto from '../dto/LottoResponseDto.js';

class LottoService {
  constructor(lottoStore, lottoWinning, lottoRepository) {
    this.lottoStore = lottoStore;
    this.lottoWinning = lottoWinning;
    this.lottoRepository = lottoRepository;
  }

  purchaseLotto(requestDTO) {
    const { purchaseAmount } = requestDTO;
    const lottoCount = LottoPrice.exchange(purchaseAmount);
    const lottos = this.lottoStore.buyLotto(lottoCount);

    this.lottoRepository.save('admin', lottos);
    return new LottoResponseDto({ lottos });
  }

  getWinningRate(winningNumbers, bonusNumber) {
    // validate
    this.lottoWinning(winningNumbers, bonusNumber);
    const lottos = this.lottoRepository.findAll('admin');
    const winningRate = this.lottoWinning.getMatchWinningRate(lottos);
    return winningRate;
  }
}

export default LottoService;

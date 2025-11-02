import WinningNumbersValidator from '../validator/domainValidator/WinningNumbersValidator.js';
import BonusNumberValidator from '../validator/domainValidator/BonusNumberValidator.js';
import LottoWinningResult from '../domain/LottoWinningResult.js';
import WinningResultDto from '../dto/responseDto/WinningResultDto.js';

class WinningResultService {
  constructor(winningFactory, lottoRepository) {
    this.winningFactory = winningFactory;
    this.lottoRepository = lottoRepository;
  }

  saveWinningNumbers(requestDTO) {
    const { winningNumbers } = requestDTO;
    WinningNumbersValidator.validate(winningNumbers);
    const winningLotto = this.winningFactory.createWinningLotto(winningNumbers);
    this.lottoRepository.save('admin', { winningLotto });
  }

  saveBonusNumber(requestDTO) {
    const { bonusNumber } = requestDTO;
    const { winningLotto } = this.lottoRepository.findAll('admin');
    // 객체끼리의 비교를 위해 먼저 생성
    const bonusLotto = this.winningFactory.createBonusLotto(bonusNumber);
    BonusNumberValidator.validate(winningLotto, bonusLotto);
    this.lottoRepository.save('admin', { bonusLotto });
  }

  getWinningResult() {
    const db = this.lottoRepository.findAll('admin');
    const { purchaseAmount, lottos, winningLotto, bonusLotto } = db;
    const { winningStats, totalWinningAmount } = LottoWinningResult.getWinningStats(
      lottos,
      winningLotto,
      bonusLotto,
    );
    const winningRate = LottoWinningResult.getWinningRate(purchaseAmount, totalWinningAmount);
    this.lottoRepository.save('admin', { winningStats, winningRate });
    return new WinningResultDto({ winningStats, winningRate });
  }
}

export default WinningResultService;

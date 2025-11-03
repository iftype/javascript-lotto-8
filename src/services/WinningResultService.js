import BonusNumberValidator from '../validators/domain/BonusNumberValidator.js';
import LottoWinningResult from '../domains/LottoWinningResult.js';
import WinningResultDto from '../dtos/responseDto/WinningResultDto.js';
import Lotto from '../domains/Lotto.js';
import LottoNumberFactory from '../domains/LottoNumberFactory.js';

class WinningResultService {
  #lottoRepository;

  constructor(lottoRepository) {
    this.#lottoRepository = lottoRepository;
  }

  saveWinningNumbers(requestDTO) {
    const { winningNumbers } = requestDTO;
    const winningLotto = new Lotto(winningNumbers);
    this.#lottoRepository.save('admin', { winningLotto });
  }

  saveBonusNumber(requestDTO) {
    const { bonusNumber } = requestDTO;
    const { winningLotto } = this.#lottoRepository.findAll('admin');
    // 객체끼리의 비교를 위해 먼저 생성
    const bonusLotto = LottoNumberFactory.getLottoNumber(bonusNumber);
    BonusNumberValidator.validate(winningLotto, bonusLotto);
    this.#lottoRepository.save('admin', { bonusLotto });
  }

  getWinningResult() {
    const db = this.#lottoRepository.findAll('admin');
    const { lottoPrice, lottos, winningLotto, bonusLotto } = db;
    const { winningStats, totalWinningAmount } = LottoWinningResult.getWinningStats(
      lottos,
      winningLotto,
      bonusLotto,
    );
    const winningRate = lottoPrice.getWinningRate(totalWinningAmount);
    this.#lottoRepository.save('admin', { winningStats, winningRate });
    return new WinningResultDto({ winningStats, winningRate });
  }
}

export default WinningResultService;

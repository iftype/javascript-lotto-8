class LottoRepository {
  #lottoDB;

  constructor() {
    this.#lottoDB = new Map();
  }

  save(id, Lottos) {
    this.#lottoDB.set(id, Lottos);
  }

  findAll(id) {
    if (!this.#lottoDB.has(id)) {
      throw new Error('저장된 데이터가 없습니다');
    }
    return this.#lottoDB.get(id);
  }
}
export default LottoRepository;

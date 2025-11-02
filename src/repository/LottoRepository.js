class LottoRepository {
  #lottoDB;

  constructor() {
    this.#lottoDB = new Map();
  }

  save(id, data) {
    const repoData = this.#lottoDB.get(id);
    const insertData = { ...repoData, ...data };
    this.#lottoDB.set(id, insertData);
  }

  update(id, data) {
    if (!this.#lottoDB.has(id)) {
      throw new Error('저장된 데이터가 없습니다');
    }
    const repoData = this.#lottoDB.get(id);
    const insertData = { ...repoData, ...data };
    this.#lottoDB.set(id, insertData);
  }

  findAll(id) {
    if (!this.#lottoDB.has(id)) {
      throw new Error('저장된 데이터가 없습니다');
    }
    return this.#lottoDB.get(id);
  }
}
export default LottoRepository;

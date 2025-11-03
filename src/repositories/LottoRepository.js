import ERROR_MESSAGES from '../constants/errorMessages.js';

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
      throw new Error(ERROR_MESSAGES.NOT_DATA);
    }
    const repoData = this.#lottoDB.get(id);
    const insertData = { ...repoData, ...data };
    this.#lottoDB.set(id, insertData);
  }

  findAll(id) {
    if (!this.#lottoDB.has(id)) {
      throw new Error(ERROR_MESSAGES.NOT_DATA);
    }
    return this.#lottoDB.get(id);
  }
}
export default LottoRepository;

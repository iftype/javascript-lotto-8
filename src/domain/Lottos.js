class Lottos {
  #lottos = [];

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottosData() {
    const data = [];
    this.#lottos.forEach((lotto) => {
      data.push(lotto.getNumbers());
    });
    return data;
  }
}

export default Lottos;

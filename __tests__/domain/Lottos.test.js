import Lottos from '../../src/domain/Lottos.js';
import LottoFactory from '../../src/domain/LottoFacotry.js';

function pickTestNumber() {
  return [2, 1, 3, 4, 5, 6];
}
const factory = new LottoFactory(pickTestNumber);
const lottoArray = [];
lottoArray.push(factory.createLotto());
lottoArray.push(factory.createLotto());
const lottos = new Lottos(lottoArray);
describe('Lottos 테스트', () => {
  const result = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ];
  test('getLottosData는 valude 배열을 출력', () => {
    console.log(result);
    expect(lottos.getLottosData()).toEqual(result);
  }); //test
}); // Lottos 테스트

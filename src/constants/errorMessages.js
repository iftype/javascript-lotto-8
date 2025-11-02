import LOTTO_SETTING from './lottoSetting.js';

const PREFIX = '[ERROR] ';
const format = (unit) => new Intl.NumberFormat().format(unit);
const { PURCHASE_UNIT, MAX_QUANTITY, MAX_LANGE, MIN_RANGE } = LOTTO_SETTING;

const ERROR_MESSAGES = Object.freeze({
  INTEGER: `${PREFIX}입력 값이 정수여야 합니다`,
  BLANK: `${PREFIX}입력 값이 비었습니다`,

  FORMAT_NOT_NUM: `${PREFIX}숫자를 입력해야 합니다`,

  PURCHASE_UNIT: `${PREFIX}구매 금액은 ${format(PURCHASE_UNIT)}원 단위로 입력해야됩니다`,
  PURCHASE_LESS: `${PREFIX}구매 금액은 ${format(PURCHASE_UNIT)}원 보다 커야합니다`,

  LOTTO_DUPLICATE: `${PREFIX}로또 번호가 중복됐습니다`,
  LOTTO_QUANTITY: `${PREFIX}로또 번호는 ${MAX_QUANTITY} 만큼 생성되어야 합니다 `,
  LOTTO_RANGE: `${PREFIX}로또 번호는 ${MIN_RANGE}부터${MAX_LANGE}여야 합니다`,
});

export default ERROR_MESSAGES;

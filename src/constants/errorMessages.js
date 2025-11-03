const PREFIX = '[ERROR]';
const format = (unit) => new Intl.NumberFormat().format(unit);

const ERROR_MESSAGES = Object.freeze({
  INTEGER: `${PREFIX}입력 값이 정수여야 합니다`,
  BLANK: `${PREFIX}입력 값이 비었습니다`,

  FORMAT_NOT_NUM: `${PREFIX}숫자를 입력해야 합니다`,

  PURCHASE_UNIT: (PURCHASE_UNIT) =>
    `${PREFIX}구매 금액은 ${format(PURCHASE_UNIT)}원 단위로 입력해야됩니다`,
  PURCHASE_LESS: (PURCHASE_UNIT) =>
    `${PREFIX}구매 금액은 ${format(PURCHASE_UNIT)}원 보다 커야합니다`,

  LOTTO_DUPLICATE: `${PREFIX}로또 번호가 중복됐습니다`,
  LOTTO_QUANTITY: (MAX_QUANTITY) => `${PREFIX}로또 번호는 ${MAX_QUANTITY}만큼 생성되어야 합니다 `,
  LOTTO_RANGE: (MIN_RANGE, MAX_RANGE) =>
    `${PREFIX}로또 번호는 ${MIN_RANGE}부터 ${MAX_RANGE}여야 합니다`,
});

export default ERROR_MESSAGES;

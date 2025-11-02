const PREFIX = '[ERROR] ';

const ERROR_MESSAGES = Object.freeze({
  POSITVE: `${PREFIX}입력 값이 양수여야 합니다`,
  INTEGER: `${PREFIX}입력 값이 정수여야 합니다`,
  BLANK: `${PREFIX}입력 값이 비었습니다`,

  FORMAT_NOT_NUM: `${PREFIX} 숫자를 입력해야 합니다`,

  PURCHASE_UNIT: `${PREFIX}구매 금액은 1,000원 단위로 입력해야됩니다`,
  PURCHASE_LESS: `${PREFIX}구매 금액은 1,000원 보다 커야합니다`,

  LOTTO_NOT_NUMBER: `${PREFIX}로또 번호는 숫자만 추가 할 수 있습니다`,
  LOTTO_DUPLICATE: `${PREFIX}로또 번호가 중복됐습니다`,
  LOTTO_QUANTITY: `${PREFIX}로또 번호는 정의된 만큼 생성되어야 합니다 `,
  LOTTO_RANGE: `${PREFIX}로또 번호는 1-45여야 합니다`,
});

export default ERROR_MESSAGES;

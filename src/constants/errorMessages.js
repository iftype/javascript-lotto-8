const PREFIX = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
  FORMAT_NOT_NUM: `${PREFIX}구매 금액 형식이 잘못되었습니다`,
  UNIT: `${PREFIX}구매 금액은 1,000원 단위로 입력해야됩니다`,
  POSITVE: `${PREFIX}입력 값이 양수여야 합니다`,
  INTEGER: `${PREFIX}입력 값이 정수여야 합니다`,
});

export default ERROR_MESSAGES;

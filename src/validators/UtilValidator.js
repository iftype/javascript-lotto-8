class UtilValidator {
  static isConvertNum(param) {
    if (param === null || typeof param === 'undefined') {
      return false;
    }
    if (String(param).trim() === '') {
      return false;
    }
    if (Number.isNaN(Number(param))) {
      return false;
    }
    return true;
  }

  static isNum(param) {
    return typeof param === 'number';
  }

  static isPositive(param) {
    if (!UtilValidator.isConvertNum(param)) return false;
    if (Number(param) <= 0) return false;
    return true;
  }

  static isInteger(param) {
    if (!UtilValidator.isConvertNum(param)) return false;
    return Number.isInteger(Number(param));
  }
}

export default UtilValidator;

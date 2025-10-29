const UtilValidator = {
  isConvertNum(param) {
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
  },

  isNum(param) {
    return typeof param === 'number';
  },

  isPositive(param) {
    if (!this.isConvertNum(param)) return false;
    if (Number(param) <= 0) return false;
    return true;
  },
};

export default UtilValidator;

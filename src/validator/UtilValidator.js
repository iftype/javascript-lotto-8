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
};

export default UtilValidator;
